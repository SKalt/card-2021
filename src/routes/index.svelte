<script lang="ts">
  import ImgOverlay from "../components/ImgOverlay.svelte";
  import HoverableArea from "../components/HoverableArea.svelte";
  import { src, width } from "../img/main.png?format=webp&metadata";
  const areas: Array<{
    alt: string;
    href: string;
    coords: Array<[number, number]>;
  }> = [
    {
      coords: [
        [1379, 309],
        [1807, 350],
        [2053, 576],
        [2063, 1234],
        [1408, 1244],
      ],
      alt: "good sci-fi, mostly",
      href: "./00/",
    },
    {
      coords: [
        [2053, 576],
        [2705, 547],
        [2695, 1216],
        [2063, 1239],
      ],
      alt: "classic but not necessarily good",
      href: "./01/",
    },
    {
      coords: [
        [1415, 1241],
        [2060, 1239],
        [2068, 1835],
        [1443, 1856],
      ],
      alt: "Mostly fantasy",
      href: "./10/",
    },
    {
      coords: [
        [2065, 1246],
        [2690, 1223],
        [2680, 1815],
        [2071, 1830],
      ],
      alt: "Almost-realistic fiction; not uplifting",
      href: "./11/",
    },
    {
      coords: [
        [2076, 2414],
        [1461, 2444],
        [1441, 1868],
        [2055, 1840],
      ],
      href: "./20/",
      alt: "Murder and realistic fiction",
    },
    {
      coords: [
        [2068, 1840],
        [2680, 1815],
        [2682, 2396],
        [2078, 2414],
      ],
      href: "./21/",
      alt: "literature",
    },
    {
      coords: [
        [2089, 2416],
        [1459, 2437],
        [1497, 3015],
        [2094, 2995],
      ],
      href: "./30/",
      alt: "Nonfiction",
    },
  ];
</script>

<svelte:head>
  <title>Happy holidays!</title>
</svelte:head>

<div class="message">
  <h2>Happy holidays from Baltimore, MD!</h2>
  <p>
    Click the shelves at right for book
    <abbr
      title="given my taste for bad sci-fi, not all recommendations are positive"
      >recommendations</abbr
    >
    for 2022.
  </p>
  <p>
    <abbr title="now my fiancee(!)">Emma</abbr> and I spent some of 2021 collecting
    used books.
  </p>
</div>

<ImgOverlay {src} alt="happy holidays" mapId="shelves" pixelWidth={width}>
  {#each areas as area}
    <HoverableArea alt={area.alt} href={area.href} coords={area.coords} />
  {/each}
</ImgOverlay>

<style>
  div.message {
    position: absolute;
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    overflow-y: scroll;
    max-width: 30%;
    top: 0;
  }
  /* phones */
  @media (max-width: 999px) {
    div.message {
      max-width: 100%;

      position: initial;
    }
  }
</style>
