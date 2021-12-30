<script lang="ts">
  import ImgOverlay from "../../components/ImgOverlay.svelte";
  import BookArea from "../../components/BookArea.svelte";
  import { src, width } from "../../img/10.jpg?webp&metadata";
  const books: Array<{
    title: string;
    author: string;
    coords: Array<[number, number]>;
  }> = [
    {
      coords: [
        [233, 318],
        [460, 328],
        [752, 430],
        [747, 644],
        [536, 651],
        [556, 2100],
        [486, 2185],
        [419, 2208],
        [344, 2211],
        [273, 2192],
      ],
      title: "Ready Player Two",
      author: "Ernest Cline",
    },
    {
      coords: [
        [540, 654],
        [713, 657],
        [720, 2104],
        [707, 2121],
        [563, 2129],
        [555, 2108],
      ],
      title: "Ready Player One",
      author: "Ernest Cline",
    },
    {
      coords: [
        [715, 654],
        [976, 662],
        [969, 817],
        [921, 811],
        [819, 843],
        [833, 2057],
        [803, 2108],
        [721, 2107],
      ],
      title: "Coraline",
      author: "Neil Gaiman",
    },
    {
      coords: [
        [820, 843],
        [931, 812],
        [1148, 816],
        [1140, 851],
        [1048, 876],
        [1049, 2051],
        [838, 2075],
        [830, 2054],
      ],
      title: "Going Postal",
      author: "Terry Pratchett",
    },
    {
      coords: [
        [1049, 883],
        [1126, 852],
        [1297, 841],
        [1251, 896],
        [1259, 2048],
        [1056, 2067],
        [1048, 2049],
      ],
      title: "Anansi Boys",
      author: "Neil Gaiman",
    },
    {
      coords: [
        [1051, 886],
        [1113, 859],
        [1296, 844],
        [1252, 891],
        [1265, 2046],
        [1484, 2081],
        [1500, 2054],
        [1505, 859],
      ],
      title: "Good Omens",
      author: "Terry Prattchett and Neil Gaiman",
    },
    {
      coords: [
        [1476, 678],
        [1475, 849],
        [1504, 889],
        [1499, 2049],
        [1507, 2083],
        [1588, 2072],
        [1587, 672],
        [1516, 672],
      ],
      title: "The Screwtape letters",
      author: "C.S. Lewis",
    },
    {
      coords: [
        [1596, 728],
        [1808, 736],
        [1809, 2080],
        [1635, 2121],
        [1588, 2080],
      ],
      title: "The Golden Compass",
      author: "Philip Pullman",
    },
    {
      coords: [
        [1737, 667],
        [1737, 723],
        [1812, 726],
        [1803, 2094],
        [1825, 2139],
        [2321, 2134],
        [2352, 656],
      ],
      title: "Jonathan Strange and Mr. Norell",
      author: "Susanna Clarke",
    },
    {
      coords: [
        [2358, 737],
        [2561, 739],
        [2524, 2072],
        [2350, 2094],
        [2324, 2080],
      ],
      title: "The Amulet of Samarkand",
      author: "Jonathan Stroud",
    },
    {
      coords: [
        [2555, 708],
        [2563, 737],
        [2523, 2070],
        [2571, 2116],
        [2721, 2113],
        [2772, 715],
        [2502, 702],
      ],
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
    },
    {
      coords: [
        [977, 518],
        [2696, 451],
        [2715, 459],
        [2708, 622],
        [2353, 652],
        [1849, 648],
        [1500, 673],
        [1072, 716],
        [984, 675],
        [979, 521],
      ],
      title: "Hiddensee",
      author: "Gregory Maguire",
    },
  ];
</script>

<ImgOverlay {src} mapId="books" pixelWidth={width} alt="TODO">
  {#each books as book}
    <BookArea title={book.title} author={book.author} coords={book.coords} />
  {/each}
</ImgOverlay>
