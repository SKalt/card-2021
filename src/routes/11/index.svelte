<script lang="ts">
  import ImgOverlay from "../../components/ImgOverlay.svelte";
  import BookArea from "../../components/BookArea.svelte";
  import { src, width } from "../../img/11.jpg?webp&metadata";
  const books: Array<{
    title: string;
    author: string;
    coords: Array<[number, number]>;
  }> = [
    {
      coords: [
        [175, 396],
        [392, 396],
        [530, 428],
        [528, 439],
        [421, 445],
        [461, 1962],
        [432, 1992],
        [222, 2010],
        [177, 394],
      ],
      title: "The Yiddish Policemen's Union",
      author: "Michael Chabon",
    },
    {
      coords: [
        [418, 448],
        [535, 443],
        [581, 1961],
        [558, 1980],
        [459, 1976],
      ],
      title: "Werewolves in their Youth",
      author: "Michael Chabon",
    },
    {
      coords: [
        [535, 356],
        [814, 344],
        [887, 367],
        [923, 1908],
        [857, 1978],
        [581, 1970],
      ],
      title: "The Amazing Adventures of Kavalier and Clay",
      author: "Michael Chabon",
    },
    {
      coords: [
        [881, 365],
        [1101, 360],
        [1138, 373],
        [1164, 408],
        [1122, 416],
        [1157, 1900],
        [1135, 1925],
        [923, 1919],
      ],
      title: "The Help",
      author: "Kathryn Stockett",
    },
    {
      coords: [
        [1121, 416],
        [1376, 416],
        [1403, 1951],
        [1384, 1967],
        [1164, 1978],
        [1156, 1908],
        [1125, 418],
      ],
      title: "The Book Thief",
    },
    {
      coords: [
        [1379, 453],
        [1502, 451],
        [1529, 1921],
        [1513, 1932],
        [1408, 1938],
        [1400, 1922],
      ],
      title: "The Secret Life of Bees",
      author: "Sue Monk Kidd",
    },
    {
      coords: [
        [1505, 614],
        [1699, 610],
        [1726, 1901],
        [1569, 1929],
        [1526, 1905],
      ],
      title: "The Devil Wears Prada",
      author: "Lauren Weisberger",
    },
    {
      coords: [
        [1732, 1895],
        [1713, 614],
        [1606, 605],
        [1592, 265],
        [1708, 150],
        [1938, 151],
        [1961, 1882],
        [1862, 1919],
        [1748, 1914],
      ],
      title: "A Thousand Splendid Suns",
      author: "Khaled Hosseni",
    },
    {
      coords: [
        [1940, 402],
        [2117, 397],
        [2141, 1873],
        [2056, 1889],
        [1959, 1882],
      ],
      title: "The Kite Runner",
      author: "Khaled Hosseni",
    },
    {
      coords: [
        [2125, 407],
        [2313, 402],
        [2333, 1889],
        [2323, 1911],
        [2187, 1922],
        [2133, 1887],
      ],
      title: "The Life of Pi",
      author: "Yann Martel",
    },
    {
      coords: [
        [2162, 396],
        [2336, 346],
        [2465, 341],
        [2499, 1911],
        [2489, 1927],
        [2369, 1925],
        [2336, 1897],
        [2312, 399],
      ],
      title: "Freshwater",
      author: "Akwaeke Emezi",
    },
    {
      coords: [
        [2171, 386],
        [2176, 242],
        [2518, 97],
        [2794, 113],
        [2789, 1868],
        [2767, 1922],
        [2690, 1941],
        [2564, 1943],
        [2500, 1913],
        [2476, 336],
        [2171, 386],
      ],
      title: "The Girl Who Kicked the Hornet's Nest",
      author: "Stieg Larson",
    },
  ];
</script>

<ImgOverlay {src} mapId="books" pixelWidth={width} alt="TODO">
  {#each books as book}
    <BookArea title={book.title} author={book.author} coords={book.coords} />
  {/each}
</ImgOverlay>
