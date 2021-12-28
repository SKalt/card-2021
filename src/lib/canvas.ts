const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const image = document.querySelector("img");
const areas = [
  ...document.querySelector(image.useMap).querySelectorAll("area"),
];
image.addEventListener("mousemove", (e) => {
  let ratio = parseInt(image.dataset["width"]) / image.width;

  document.getElementById("dbg").textContent =
    (e.offsetX * ratio).toFixed(1) + "," + (e.offsetY * ratio).toFixed(1);
});

window.addEventListener("click", () => {
  navigator.clipboard
    .writeText(document.getElementById("dbg").textContent)
    .then(() => console.log("ok"))
    .catch(console.error);
});

const measure = async (img: HTMLImageElement): Promise<[number, number]> => {
  const i = new Image();
  const later = new Promise<[number, number]>((resolve) => {
    i.addEventListener("load", () => {
      resolve([i.width, i.height]);
    });
  });
  i.src = img.src;
  return later;
};

const resizeImageMapArea = (area: HTMLAreaElement, ratio: number) => {
  area.coords = parseCoords(
    // get or set data-x, data-y for original image map coordinates
    area.dataset["coords"] ?? (area.dataset["coords"] = area.coords)
  )
    .map((coord) => coord / ratio)
    .join(",");
};

const parseCoords = (coords: string): number[] =>
  coords.split(",").map((i) => parseInt(i.trim()));

/** show the outline of the <area> you're hovering over */
const show = (area: HTMLAreaElement) => {
  // const area = e.target as HTMLAreaElement;
  let coords = parseCoords(area.coords);
  switch (area.shape) {
    case "rect":
      const [x0, y0, x1, y1] = coords;
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.rect(x0, y0, x1 - x0, y1 - y0);
      ctx.stroke();
    case "poly":
      let _coords = [...coords];
      _coords.reverse();
      let [x, y] = [_coords.pop(), _coords.pop()];
      ctx.moveTo(x, y);
      ctx.rect(x, y, 10, 10);
      ctx.beginPath();
      while (_coords.length) {
        let [x, y] = [_coords.pop(), _coords.pop()];
        ctx.lineWidth = 4;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
  }
};
/** clear the canvas */
const hide = () => {
  console.log("clear");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

areas.forEach((area) =>
  area.addEventListener("mouseenter", (e) => show(e.target as HTMLAreaElement))
);
areas.forEach((area) => area.addEventListener("mouseleave", hide));

const resizeCanvas = () => {
  const { width, height } = image;
  if (width) canvas.width = width;
  if (height) canvas.height = height;
};

const handleSize = () => {
  resizeCanvas();
  const originalWidth = image.dataset["width"];
  if (!originalWidth)
    return measure(image)
      .then(([w, h]) => (image.dataset["width"] = w.toString()))
      .then(handleSize);

  const ratio = parseInt(originalWidth) / image.width;
  console.log(ratio);
  areas.forEach((area) => resizeImageMapArea(area, ratio));
  areas.forEach((a) => show(a));
};

image.addEventListener("resize", handleSize);
image.addEventListener("load", handleSize);
