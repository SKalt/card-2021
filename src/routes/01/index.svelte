<script lang="ts">
  import type { Book } from "../common";
  import ImgOverlay from "../../components/ImgOverlay.svelte";
  import BookArea from "../../components/BookArea.svelte";
  import BookReview from "../../components/BookReview.svelte";

  import { src, width } from "../../img/01.jpg?webp&metadata";

  import HamburgerNav from "../../components/HamburgerNav.svelte";
  import HardToBeAGod from "../../books/hard_to_be_a_god.md";
  import RoadsidePicnic from "../../books/roadside_picnic.md";
  import TheSnailOnTheSlope from "../../books/the_snail_on_the_slope.md";
  import TheMartian from "../../books/the_martian.md";
  import EndersShadow from "../../books/enders_shadow.md";
  import Rendezvous from "../../books/rendezvous_with_rama.md";
  import HGWells from "../../books/hg_wells.md";
  import Ringworld from "../../books/ringworld.md";
  import Mote from "../../books/the_mote_in_gods_eye.md";

  const books: Array<Book> = [
    {
      coords: [
        [81, 249],
        [435, 161],
        [568, 166],
        [573, 269],
        [250, 391],
        [309, 1872],
        [274, 1922],
        [151, 1922],
      ],
      title: "Hard to be a God",
      author: "Arkady and Boris Strugatsky",
      recommended: true,
      component: HardToBeAGod,
    },
    {
      coords: [
        [250, 391],
        [547, 274],
        [660, 273],
        [400, 395],
        [455, 1864],
        [440, 1882],
        [304, 1885],
      ],
      title: "Roadside Picnic",
      author: "Arkady and Boris Strugatsky",
      component: RoadsidePicnic,
      recommended: true,
    },
    {
      coords: [
        [403, 395],
        [665, 277],
        [720, 279],
        [577, 359],
        [576, 391],
        [621, 1851],
        [593, 1885],
        [450, 1875],
      ],
      title: "The Snail on the Slope",
      author: "Arkady and Boris Strugatsky",
      component: TheSnailOnTheSlope,
    },
    {
      coords: [
        [579, 359],
        [779, 249],
        [941, 252],
        [949, 461],
        [919, 461],
        [804, 606],
        [852, 1768],
        [791, 1923],
        [633, 1939],
      ],
      title: "The Martian",
      author: "Andy Weir",
      component: TheMartian,
    },
    {
      coords: [
        [810, 614],
        [916, 466],
        [1123, 466],
        [1122, 547],
        [1138, 1855],
        [1101, 1917],
        [876, 1922],
        [855, 1875],
        [807, 621],
      ],
      title: "Ender's Shadow",
      author: "Orson Scott Card",
      component: EndersShadow,
    },
    {
      coords: [
        [1115, 258],
        [1171, 166],
        [1286, 166],
        [1277, 268],
        [1294, 1909],
        [1230, 1936],
        [1144, 1923],
      ],
      title: "Rendezvous with Rama",
      author: "Arthur C Clarke",
      component: Rendezvous,
    },
    {
      coords: [
        [1294, 174],
        [1293, 1923],
        [1315, 1952],
        [1526, 1939],
        [1542, 1901],
        [1556, 271],
        [1486, 169],
      ],
      title: "Rama II",
      author: "Arthur C Clarke",
    },
    {
      coords: [
        [1497, 174],
        [1492, 65],
        [1786, 59],
        [1947, 121],
        [1920, 1890],
        [1907, 2011],
        [1728, 2005],
        [1590, 2017],
        [1554, 2003],
        [1545, 1920],
        [1554, 274],
      ],
      title: "The World Treasury of Science Fiction (1989)",
    },
    {
      coords: [
        [1789, 62],
        [1794, 36],
        [1976, 94],
        [2068, 71],
        [2084, 46],
        [2322, 87],
        [2268, 1936],
        [2257, 1971],
        [2134, 1990],
        [1953, 1957],
        [1920, 1875],
        [1952, 124],
      ],
      title: "H.G. Wells Science Fiction Treasury",
      author: "H.G. Wells",
      component: HGWells,
    },
    {
      coords: [
        [2332, 316],
        [2266, 1883],
        [2324, 1982],
        [2477, 1966],
        [2563, 431],
        [2340, 319],
      ],
      title: "Ringworld",
      author: "Larry Niven",
      component: Ringworld,
      recommended: false,
    },
    {
      coords: [
        [2332, 186],
        [2503, 183],
        [2873, 279],
        [2798, 1982],
        [2533, 1995],
        [2488, 1944],
        [2563, 429],
        [2335, 312],
      ],
      title: "The Mote in God's Eye",
      author: "Larry Niven",
      recommended: false,
      component: Mote,
    },
  ];
</script>

<ImgOverlay
  {src}
  mapId="books"
  pixelWidth={width}
  alt="some great, some awful science fiction"
>
  {#each books as book}
    <BookArea title={book.title} author={book.author} coords={book.coords} />
  {/each}
</ImgOverlay>
<HamburgerNav left="../00/" down="../11/" />

{#each books as book}
  {#if book.component}
    <BookReview title={book.title} author={book.author}>
      <svelte:component this={book.component} />
    </BookReview>
  {/if}
{/each}
