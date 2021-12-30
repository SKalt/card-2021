<script lang="ts">
  import ImgOverlay from "../../components/ImgOverlay.svelte";
  import BookArea from "../../components/BookArea.svelte";
  import { src, width } from "../../img/20.jpg?webp&metadata";
  import HamburgerNav from "../../components/HamburgerNav.svelte";
  const books: Array<{
    title: string;
    author: string;
    coords: Array<[number, number]>;
  }> = [
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
    },
    {
      coords: [
        [1702, 1336],
        [1728, 163],
        [1848, 182],
        [1814, 1342],
      ],
      title: "Precious Sapphire",
      author: "",
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
    <BookArea title={book.title} author={book.author} coords={book.coords} />
  {/each}
</ImgOverlay>
