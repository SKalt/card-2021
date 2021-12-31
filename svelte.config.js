// import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { imagetools } from "vite-imagetools";
import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess(),
    mdsvex({ extensions: [".md"], layout: "./src/books/layout.svelte" }),
  ],
  extensions: [".svelte", ".md"],
  kit: {
    adapter: adapter(),
    paths: {
      base: "/2021",
    },
    trailingSlash: "always",

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: () => ({ plugins: [imagetools()] }),
  },
};

export default config;
