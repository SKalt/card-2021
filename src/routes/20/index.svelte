<script lang="ts">
  import type { Book } from "../common";
  import ImgOverlay from "../../components/ImgOverlay.svelte";
  import BookArea from "../../components/BookArea.svelte";
  import HamburgerNav from "../../components/HamburgerNav.svelte";

  import { src, width } from "../../img/20.jpg?webp&metadata";

  import TheValleyofFear from "../../books/the_valley_of_fear.md";
  import Precious from "../../books/precious.md";
  import CatAmongthePigeons from "../../books/cat_among_the_pigeons.md";
  import MurderontheOrientExpress from "../../books/murder_on_the_orient_express.md";
  import TheABCMurders from "../../books/the_abc_murders.md";
  import TheHoundoftheBaskervilles from "../../books/the_hound_of_the_baskervilles.md";
  import ThePurrfectCrime from "../../books/the_purr_fect_crime.md";
  import AbsoluteFriends from "../../books/absolute_friends.md";
  import TheTestaments from "../../books/the_testaments.md";
  import TheHateUGive from "../../books/the_hate_u_give.md";
  import Years from "../../books/12_years_a_slave.md";
  import SetAWatchman from "../../books/go_set_a_watchman.md";
  import ToKillAMockingbird from "../../books/to_kill_a_mockingbird.md";
  import HeartOfDarkness from "../../books/heart_of_darkness.md";
  import BookReview from "../../components/BookReview.svelte";

  const books: Array<Book> = [
    {
      coords: [
        [208, 327],
        [334, 282],
        [422, 276],
        [420, 294],
        [304, 339],
        [282, 1367],
        [211, 1377],
      ],
      title: "The Valley of Fear",
      author: "Sir Arthur Conan Doyle",
      component: TheValleyofFear,
    },
    {
      coords: [
        [304, 345],
        [431, 294],
        [559, 282],
        [438, 349],
        [422, 1368],
        [285, 1392],
      ],
      title: "Cat Among the Pigeons",
      author: "Agatha Christie",
      component: CatAmongthePigeons,
    },
    {
      coords: [
        [441, 358],
        [541, 297],
        [608, 301],
        [588, 356],
        [572, 1379],
        [562, 1384],
        [434, 1400],
        [420, 1377],
      ],
      title: "Murder on the Orient Express",
      author: "Agatha Christie",
      component: MurderontheOrientExpress,
      recommended: true,
    },
    {
      coords: [
        [597, 314],
        [648, 272],
        [675, 278],
        [648, 1393],
        [572, 1396],
      ],
      title: "The A.B.C. Murders",
      author: "Agatha Christie",
      component: TheABCMurders,
    },
    {
      coords: [
        [672, 230],
        [643, 1398],
        [720, 1431],
        [847, 1403],
        [895, 208],
      ],
      title: "The Hound of the Baskervilles",
      author: "Sir Arthur Conan Doyle",
      component: TheHoundoftheBaskervilles,
    },
    {
      coords: [
        [902, 88],
        [920, 65],
        [1041, 62],
        [1063, 97],
        [1026, 1328],
        [934, 1322],
        [897, 1434],
        [854, 1421],
      ],
      title: "The Purr-fect Crime",
      author: "",
      component: ThePurrfectCrime,
    },
    {
      coords: [
        [1052, 311],
        [1204, 305],
        [1262, 353],
        [1242, 1331],
        [1033, 1326],
      ],
      title: "Absolute Friends",
      author: "John le Carre",
      component: AbsoluteFriends,
    },
    {
      coords: [
        [1240, 1345],
        [1261, 361],
        [1213, 321],
        [1186, 177],
        [1376, 158],
        [1469, 208],
        [1454, 1335],
      ],
      title: "The Testaments",
      author: "Margaret Atwood",
      component: TheTestaments,
    },
    {
      coords: [
        [1393, 174],
        [1395, 68],
        [1731, 91],
        [1705, 1336],
        [1459, 1333],
        [1475, 209],
      ],
      title: "The Hate U Give",
      author: "",
      component: TheHateUGive,
    },
    {
      coords: [
        [1702, 1336],
        [1728, 163],
        [1848, 182],
        [1814, 1342],
      ],
      title: "Precious",
      author: "Sapphire",
      component: Precious,
    },
    {
      coords: [
        [1947, 1351],
        [1814, 1342],
        [1849, 201],
        [1973, 237],
      ],
      title: "12 Years a Slave",
      author: "Solomon Northup",
      component: Years,
    },
    {
      coords: [
        [1765, 151],
        [1767, 5],
        [1767, 5],
        [2132, 0],
        [2101, 1344],
        [2098, 1342],
        [1948, 1344],
        [1976, 233],
      ],
      title: "Go Set a Watchman",
      author: "Harper Lee",
      component: SetAWatchman,
    },
    {
      coords: [
        [2124, 176],
        [2242, 184],
        [2229, 1348],
        [2095, 1342],
      ],
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      component: ToKillAMockingbird,
    },
    {
      coords: [
        [932, 1322],
        [1026, 1338],
        [2225, 1354],
        [2254, 1338],
        [2455, 1577],
        [2643, 1896],
        [2640, 1996],
        [815, 1971],
        [805, 1884],
        [859, 1575],
      ],
      title: "The Heart of Darkness",
      author: "Joseph Conrad",
      component: HeartOfDarkness,
    },
  ];
</script>

<HamburgerNav up="../10/" right="../21/" down="../30/" />

<ImgOverlay
  {src}
  mapId="books"
  pixelWidth={width}
  alt="Murder, cat-themed murder, and depressing realistic fiction"
>
  {#each books as book}
    <BookArea {...book} />
  {/each}
</ImgOverlay>

{#each books as book}
  {#if book.component}
    <BookReview
      title={book.title}
      author={book.author}
      recommended={book.recommended}
    >
      <svelte:component this={book.component} />
    </BookReview>
  {/if}
{/each}
