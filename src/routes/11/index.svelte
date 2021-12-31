<script lang="ts">
  import type { Book } from "../common";
  import ImgOverlay from "../../components/ImgOverlay.svelte";
  import BookArea from "../../components/BookArea.svelte";
  import HamburgerNav from "../../components/HamburgerNav.svelte";

  import { src, width } from "../../img/11.jpg?webp&metadata";

  import TheAdventures from "../../books/the_amazing_adventures_of_kavalier_and_clay.md";
  import YiddishPolicmensUnion from "../../books/the_yiddish_policemens_union.md";
  import Werewolves from "../../books/werewolves_in_their_youth.md";
  import TheHelp from "../../books/the_help.md";
  import TheBookThief from "../../books/the_book_thief.md";
  import TheDevilWearsPrada from "../../books/the_devil_wears_prada.md";
  import BookReview from "../../components/BookReview.svelte";
  import AThousandSplendidSuns from "../../books/a_thousand_splendid_suns.md";
  import TheKiteRunner from "../../books/the_kite_runner.md";
  import TheSecretLifeOfBees from "../../books/the_secret_life_of_bees.md";
  import Freshwater from "../../books/freshwater.md";
  import HornetsNest from "../../books/the_girl_who_kicked_the_hornets_nest.md";
  import TheLifeOfPi from "../../books/the_life_of_pi.md";

  const books: Array<Book> = [
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
      recommended: true,
      component: YiddishPolicmensUnion,
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
      component: Werewolves,
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
      component: TheAdventures,
      recommended: true,
    },
    {
      component: TheHelp,
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
      component: TheBookThief,
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
      component: TheSecretLifeOfBees,
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
      component: TheDevilWearsPrada,
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
      component: AThousandSplendidSuns,
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
      component: TheKiteRunner,
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
      component: TheLifeOfPi,
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
      component: Freshwater,
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
      component: HornetsNest,
    },
  ];
</script>

<HamburgerNav up="../01/" left="../10/" right="../12/" down="../21/" />
<ImgOverlay {src} mapId="books" pixelWidth={width} alt="Realistic fiction">
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
