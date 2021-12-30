<script lang="ts">
  import ImgOverlay from "../../components/ImgOverlay.svelte";
  import BookArea from "../../components/BookArea.svelte";
  import { src, width } from "../../img/21.jpg?webp&metadata";
  import HamburgerNav from "../../components/HamburgerNav.svelte";
  const books: Array<{
    title: string;
    author: string;
    coords: Array<[number, number]>;
  }> = [
    {
      coords: [
        [271, 46],
        [556, 55],
        [783, 111],
        [788, 281],
        [596, 303],
        [594, 1815],
        [562, 1860],
        [265, 1860],
      ],
      title: "Ship of Theseus",
      author: "J. J. Abrams",
    },
    {
      coords: [
        [810, 131],
        [880, 187],
        [874, 286],
        [836, 298],
        [840, 1795],
        [820, 1815],
        [783, 1822],
        [602, 1823],
        [596, 1819],
        [596, 300],
        [776, 287],
      ],
      title: "Catch-22",
      author: "Joseph Heller",
    },
    {
      coords: [
        [853, 300],
        [919, 282],
        [1088, 284],
        [1088, 366],
        [1138, 367],
        [1171, 337],
        [1262, 340],
        [1266, 1790],
        [1251, 1804],
        [1149, 1811],
        [1134, 1783],
        [1134, 1783],
        [847, 1803],
      ],
      title: "Pride and Prejudice",
      author: "Jane Austen",
    },
    {
      coords: [
        [1275, 196],
        [1513, 190],
        [1518, 1667],
        [1510, 1793],
        [1274, 1790],
        [1272, 193],
      ],
      title: "Look Homeward Angel",
      author: "Thomas Wolfe",
    },
    {
      coords: [
        [1515, 204],
        [1656, 204],
        [1681, 244],
        [1649, 1664],
        [1518, 1672],
      ],
      title: "Dracula",
      author: "Bram Stoker",
    },
    {
      coords: [
        [1680, 290],
        [1785, 276],
        [1846, 303],
        [1822, 1761],
        [1811, 1777],
        [1672, 1780],
        [1640, 1675],
      ],
      title: "Wuthering Heights",
      author: "Emily Bronte",
    },
    {
      coords: [
        [1838, 343],
        [1938, 382],
        [1914, 1764],
        [1838, 1769],
        [1815, 1758],
      ],
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
    {
      coords: [
        [1914, 1761],
        [1943, 393],
        [2006, 417],
        [1994, 1747],
        [1954, 1756],
      ],
      title: "The Crucible",
      author: "Artur Miller",
    },
    {
      coords: [
        [1943, 390],
        [2015, 420],
        [1996, 1750],
        [2079, 1751],
        [2098, 412],
        [1994, 385],
      ],
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
    },
    {
      coords: [
        [2100, 430],
        [2199, 455],
        [2181, 1780],
        [2105, 1780],
        [2082, 1748],
      ],
      title: "Animal Farm",
      author: "George Orwell",
    },
    {
      coords: [
        [2204, 489],
        [2324, 529],
        [2309, 1719],
        [2285, 1739],
        [2186, 1739],
      ],
      title: "1984",
      author: "George Orwell",
    },
    {
      coords: [
        [2327, 535],
        [2405, 562],
        [2396, 1719],
        [2311, 1726],
      ],
      title: "A Separate Peace",
      author: "John Knowles",
    },
    {
      coords: [
        [2399, 567],
        [2453, 567],
        [2453, 1719],
        [2397, 1724],
      ],
      title: "Faust",
      author: "Goethe",
    },
    {
      coords: [
        [2455, 1727],
        [2522, 1726],
        [2528, 564],
        [2330, 503],
        [2287, 513],
        [2456, 570],
      ],
      title: "Night",
      author: "Elie Wiesel",
    },
    {
      coords: [
        [2324, 489],
        [2402, 489],
        [2447, 497],
        [2445, 455],
        [2568, 479],
        [2579, 530],
        [2618, 543],
        [2613, 1721],
        [2544, 1734],
        [2519, 1718],
        [2527, 562],
        [2324, 508],
      ],
      title: "The Bell Jar",
      author: "Sylvia Plath",
    },
  ];
</script>

<HamburgerNav up="../11/" left="../20/" />
<ImgOverlay {src} mapId="books" pixelWidth={width} alt="Literature">
  {#each books as book}
    <BookArea title={book.title} author={book.author} coords={book.coords} />
  {/each}
</ImgOverlay>
