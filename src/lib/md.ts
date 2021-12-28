// _very_ simple RegExp parser combinator setup
// only able to parse + render the markdown we use here.
const FRONT_MATTER = /^---\n(.+)\n---\n/g;
const decorations = [
  /([_]{3}([^_]*)[_]{3}|[*]{3}([^*]*)[*]{3})/,
  /([_]{2}([^_]*)[_]{2}|[*]{2}([^*]*)[*]{2})/,
  /([_]{1}([^_]*)[_]{1}|[*]{1}([^*]*)[*]{1})/,
  /([`]{1}([^`]*)[`]{1})/,
];
const BOLD_ITALIC = decorations[0];
const BOLD = decorations[1];
const ITALIC = decorations[2];
const INLINE_CODE = decorations[3];
const CODE_BLOCK = /[`]{3}(?<lang>[^\n]*)\n(?<inner>[^`]*)[`]{3}\n/; //decorations[4];
const YAML_KV = /(?<key>\w)+:\s*(?<value>.+)\s*$/m;
const LINK = /\[(?<text>[^\]]*)\]\((?<href>[^)]*)\)/;
type Combinator<T = string> = (input: string) => [T, string] | Error;

/** the front-matter */
type BookLinks = {
  ebook: string;
  library: string;
  goodreads: string;
};
export type BookData = BookLinks & {
  /** notes **as an html string** */
  notes: string;
};

/* ----------------------------- combinators ----------------------------- */
const anyOf =
  (...parsers: Combinator[]): Combinator =>
  (input) => {
    for (const parser of parsers) {
      const result = parser(input);
      if (result instanceof Error) continue;
      return result;
    }
    return Error(`no parsers match:\n${input}`);
  };
const many0 =
  (parser: Combinator): Combinator =>
  (input: string) => {
    let rest = input;
    let html = "";
    while (rest.length > 0) {
      const result = parser(rest);
      if (result instanceof Error) break;
      html += result[0];
      rest = result[1];
    }
    return [html, input.slice(rest.length)];
  };
const many1 =
  (parser: Combinator): Combinator =>
  (input) => {
    const result = many0(parser)(input);
    if (result instanceof Error) return result;
    if (result[0]) return result;
    return Error("no match");
  };
const LINKS = ["ebook", "library", "goodreads"];
const mustMatch =
  (re: RegExp): Combinator<RegExpExecArray> =>
  (input: string) => {
    let match = re.exec(input);
    if (match === null) {
      return Error(`no match for ${re}`);
    } else {
      return [match, input.slice(match[0].length)];
    }
  };

/* -------------------------------- markdown -------------------------------- */
const frontMatter: Combinator<BookLinks> = (
  raw: string
): [BookLinks, string] | Error => {
  const result = mustMatch(FRONT_MATTER)(raw);
  if (result instanceof Error) return result;
  const [[_, inner], rest] = result;
  const data = inner
    .split("\n")
    .filter(Boolean)
    .map(YAML_KV.exec)
    .filter(Boolean)
    .map((match) => ({ [match.groups["key"]]: match.groups["value"] }))
    .reduce((a, r) => Object.assign(a, r));
  const missing = LINKS.filter((key) => !(key in data));
  return missing.length > 0
    ? Error(`missing links: ${missing}`)
    : [data as BookLinks, rest];
};

const escapeHtml = (html: string) =>
  html.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;");

const anyChar: Combinator = (input: string) =>
  input.length ? [input.slice(0, 1), input.slice(1)] : Error("EOF");
const eof: Combinator = (input) => (input ? Error("remaining text") : ["", ""]);

const _decorated = (
  start: string,
  re: RegExp,
  getInner: (match: RegExpExecArray) => string = (match) => match[2] ?? match[3]
): Combinator => {
  const end = start.replace(/</g, "</");
  const getMatch = mustMatch(re);
  return (input) => {
    let result = getMatch(input);
    if (result instanceof Error) return result;
    const [match, rest] = result;
    const inner = getInner(match);
    return [`${start}${inner}${end}`, rest];
  };
};

const codeBlock: Combinator = (input) => {
  let match = mustMatch(CODE_BLOCK)(input);
  if (match instanceof Error) return match;
  let [_match, rest] = match;
  let lang = _match.groups["lang"] ?? "";
  lang = lang ? ` lang=${lang.replace('"', "%22")}"` : "";
  let inner = _match.groups["inner"] ?? "";
  return [`<pre><code ${lang}>${inner}</code></pre>`, rest];
};

const inlineCode: Combinator = _decorated("<code>", INLINE_CODE);
const bold: Combinator = _decorated("<b>", BOLD);
const italic: Combinator = _decorated("<i>", ITALIC);
const boldItalic: Combinator = _decorated("<b><i>", BOLD_ITALIC);
const maybeDecorated: Combinator = many0(
  anyOf(inlineCode, boldItalic, bold, italic, anyChar)
);

const link: Combinator = (input) => {
  let result = mustMatch(LINK)(input);
  if (result instanceof Error) return result;
  const [match, rest] = result;
  let href = encodeURI(match.groups["href"]);
  let linkTextParse = maybeDecorated(match.groups["text"]);
  if (linkTextParse instanceof Error) throw linkTextParse;
  const [linkText, _rest] = linkTextParse;
  if (_rest) {
    return Error(`unable to parse link text: \`${_rest}\``);
  }
  return [
    `<a href="${href}" target="_blank" rel="noreferrer">${linkText}</a>`,
    rest,
  ];
};
const _paragraphText = many1(anyOf(codeBlock, link, maybeDecorated));
const paragraphText: Combinator = (input) => _paragraphText(input);

const paragraph: Combinator = (input) => {
  if (!input.length) return ["", ""];

  let html = "";

  let result = mustMatch(/(.+)\n{2,}/)(input);
  let [inner, rest] =
    result instanceof Error
      ? // the rest of the text is the paragraph
        [input, ""]
      : [result[0][1], result[1]];

  if (inner.length > 0 && !/^\s+$/.test(inner)) {
    let textParseResult = paragraphText(inner);
    if (textParseResult instanceof Error) return textParseResult;
    let [text, _rest] = textParseResult;
    if (_rest) {
      return Error(`parsing paragraph text failed to consume: \`${_rest}\``);
    }
    html += `<p>${text}</p>`;
  }
  return [html, rest];
};

const md: Combinator<BookData> = (raw: string) => {
  let result = frontMatter(raw);
  if (result instanceof Error) return result;
  let [links, rest] = result;
  let parse2 = many0(paragraph)(rest);
  if (parse2 instanceof Error) return parse2;
  let [notes, _rest] = parse2;
  if (_rest) {
    return Error(`unable to consume markdown:\n\`${_rest}\``);
  } else {
    return [{ ...links, notes }, ""];
  }
};
export default md;
