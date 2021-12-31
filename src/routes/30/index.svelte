<script lang="ts">
  import type { Book } from "../common";
  import ImgOverlay from "../../components/ImgOverlay.svelte";
  import BookArea from "../../components/BookArea.svelte";
  import HamburgerNav from "../../components/HamburgerNav.svelte";

  import { src, width } from "../../img/30.jpg?webp&metadata";
  import DesigningData from "../../books/designing_data_intensive_applications.md";
  import AndTheBandPlayedOn from "../../books/and_the_band_played_on.md";
  import SpamNation from "../../books/spam_nation.md";
  import TheMysteryOfTheExplodingTeet from "../../books/the_mystery_of_the_exploding_teeth.md";
  import BeingMortal from "../../books/being_mortal.md";
  import Complications from "../../books/complications.md";
  import TheEmperorOfAllMaladies from "../../books/the_emperor_of_all_maladies.md";
  import TheViolinistsThumb from "../../books/the_violinists_thumb.md";
  import BookReview from "../../components/BookReview.svelte";

  const books: Array<Book> = [
    {
      coords: [
        [549, 147],
        [978, 110],
        [1048, 308],
        [1071, 561],
        [1149, 1814],
        [1146, 1884],
        [947, 1929],
        [776, 1069],
      ],
      title: "Designing Data-Intensive Applications",
      author: "Martin Klepmann",
      component: DesigningData,
    },
    {
      coords: [
        [1058, 337],
        [1142, 1804],
        [1166, 1849],
        [1421, 1835],
        [1454, 1751],
        [1409, 505],
        [1376, 284],
      ],
      title: "And the Band Played On",
      author: "Randy Shilts",
      component: AndTheBandPlayedOn,
    },
    {
      coords: [
        [1373, 102],
        [1563, 89],
        [1628, 305],
        [1646, 1809],
        [1606, 1843],
        [1496, 1852],
        [1451, 1742],
        [1413, 506],
        [1374, 286],
      ],
      title: "Spam Nation",
      author: "Brian Krebs",
      component: SpamNation,
    },
    {
      coords: [
        [1636, 348],
        [1707, 354],
        [1812, 564],
        [1811, 1891],
        [1791, 1918],
        [1689, 1924],
        [1662, 1914],
        [1640, 1822],
        [1625, 359],
      ],
      title: "The Mystery of the Exploding Teeth",
      author: "Thomas Morris",
      component: TheMysteryOfTheExplodingTeet,
    },
    {
      coords: [
        [1715, 249],
        [1748, 266],
        [1846, 255],
        [1860, 230],
        [2036, 481],
        [1980, 1833],
        [1975, 1871],
        [1951, 1892],
        [1839, 1902],
        [1807, 1884],
        [1817, 553],
        [1723, 350],
      ],
      title: "Being Mortal",
      author: "Atul Gawande",
      component: BeingMortal,
    },
    {
      coords: [
        [1889, 236],
        [2046, 233],
        [2260, 505],
        [2159, 1889],
        [2153, 1918],
        [2022, 1922],
        [1993, 1918],
        [1975, 1865],
        [2036, 489],
        [1895, 247],
      ],
      title: "Complications",
      author: "Atul Gawande",
      component: Complications,
    },
    {
      coords: [
        [2050, 241],
        [2054, 124],
        [2320, 116],
        [2602, 362],
        [2442, 1929],
        [2189, 1937],
        [2164, 1887],
        [2257, 500],
        [2050, 236],
      ],
      title: "The Emperor of All Maladies",
      author: "Siddhartha Mukherjee",
      component: TheEmperorOfAllMaladies,
    },
    {
      coords: [
        [2605, 377],
        [2439, 1934],
        [2464, 1948],
        [2643, 1945],
        [2848, 596],
        [2842, 569],
        [2607, 370],
      ],
      title: "The Violinist's Thumb",
      author: "Sam Kean",
      component: TheViolinistsThumb,
    },
  ];
</script>

<HamburgerNav up="../20/" />
<ImgOverlay {src} mapId="books" pixelWidth={width} alt="Nonfiction">
  {#each books as book}
    <BookArea title={book.title} author={book.author} coords={book.coords} />
  {/each}
</ImgOverlay>

{#each books as book}
  {#if book.component}
    <BookReview title={book.title} author={book.author}>
      <svelte:component this={book.component} />
    </BookReview>
  {/if}
{/each}
