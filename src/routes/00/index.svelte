<script lang="ts">
  import { onMount } from "svelte";

  import ImgOverlay from "../../components/ImgOverlay.svelte";
  import BookArea from "../../components/BookArea.svelte";
  import BookReview from "../../components/BookReview.svelte";
  import HamburgerNav from "../../components/HamburgerNav.svelte";
  import { src, width, height } from "../../img/00.jpg?webp&metadata";
  import { Book, snake_case } from "../common";

  import TheEyreAffair from "../../books/the_eyre_affair.md";
  import TheFourthBear from "../../books/the_fourth_bear.md";
  import TheLastDAysOfNewParis from "../../books/the_last_days_of_new_paris.md";
  import Watchmen from "../../books/watchmen.md";
  import TheThreeBodyProblem from "../../books/the_three_body_problem.md";
  import TheDarkForest from "../../books/the_dark_forest.md";
  import DeathsEnd from "../../books/deaths_end.md";
  import Station11 from "../../books/station_11.md";
  import PatternRecogniton from "../../books/pattern_recognition.md";
  import SnowCrash from "../../books/snow_crash.md";
  import Cryptonomicon from "../../books/cryptonomicon.md";
  import AWrinkleInTime from "../../books/a_wrinkle_in_time.md";
  import JourneyToTheCenterOfTheEarth from "../../books/journey_to_the_center_of_the_earth.md";
  import FantasticVoyage from "../../books/fantastic_voyage.md";

  const right = "../01/";
  const down = "../10/";

  const books: Array<Book> = [
    {
      coords: [
        [259, 198],
        [1672, 483],
        [1683, 571],
        [275, 350],
      ],
      title: "The Eyre Affair",
      author: "Jasper Fforde",
      component: TheEyreAffair,
    },
    {
      coords: [
        [102, 331],
        [1857, 601],
        [1873, 792],
        [1830, 830],
        [1824, 804],
        [118, 563],
      ],
      title: "The Fourth Bear (Nursery Crimes #2)",
      author: "Jasper Fforde",
      component: TheFourthBear,
    },
    {
      coords: [
        [254, 592],
        [1824, 806],
        [1820, 894],
        [1808, 905],
        [256, 652],
      ],
      title: "The Last Days of New Paris",
      author: "China Mieville",
      component: TheLastDAysOfNewParis,
    },
    {
      coords: [
        [1865, 910],
        [1880, 956],
        [96, 945],
        [96, 923],
        [260, 660],
      ],
      author: "",
      title: "",
    },
    {
      coords: [
        [331, 3804],
        [480, 3801],
        [576, 3652],
        [552, 2083],
        [595, 2059],
        [572, 1873],
        [296, 1924],
      ],
      title: "Watchmen (1986)",
      author: "Alan Moore & Dave Gibbons",
      component: Watchmen,
    },
    {
      coords: [
        [744.8, 1992.0],
        [908.8, 1984.0],
        [862.4, 2027.2],
        [750.4, 2084.8],
        [756.8, 3644.8],
        [579.2, 3659.2],
        [555.2, 2083.2],
      ],
      title: "The Three-Body Problem",
      author: "Cixin Liu",
      component: TheThreeBodyProblem,
      recommended: true,
    },
    {
      coords: [
        [910, 1996],
        [1096, 1996],
        [1035, 2078],
        [1019, 3608],
        [1000, 3664],
        [766, 3664],
        [761, 2089],
      ],
      title: "The Dark Forest",
      author: "Cixin Liu",
      component: TheDarkForest,
      recommended: true,
    },
    {
      coords: [
        [1107, 1993],
        [1369, 1992],
        [1357, 2139],
        [1328, 2264],
        [1305, 3614],
        [1291, 3643],
        [1035, 3651],
        [1041, 2072],
      ],
      title: "Death's End",
      author: "Cixin Liu",
      component: DeathsEnd,
      recommended: true,
    },
    {
      coords: [
        [1363, 2142],
        [1465, 2150],
        [1473, 2352],
        [1467, 2481],
        [1440, 3612],
        [1308, 3630],
        [1332, 2276],
      ],
      title: "Station Eleven",
      author: "Emily St. John Mandel",
      component: Station11,
      recommended: true,
    },
    {
      coords: [
        [1476, 2352],
        [1443, 3585],
        [1606, 3568],
        [1627, 2488],
        [1638, 2462],
        [1601, 2352],
        [1475, 2356],
      ],
      title: "Pattern Recognition",
      author: "William Gibson",
      component: PatternRecogniton,
    },
    {
      coords: [
        [1604, 2208],
        [1595, 2347],
        [1644, 2465],
        [1617, 3563],
        [1630, 3588],
        [1806, 3579],
        [1852, 2336],
        [1862, 2312],
        [1771, 2203],
      ],
      title: "Snow Crash",
      author: "Neal Stephenson",
      component: SnowCrash,
    },
    {
      coords: [
        [1721, 2196],
        [1721, 2166],
        [2011, 2156],
        [2132, 2267],
        [2064, 3520],
        [1832, 3545],
        [1806, 3531],
        [1859, 2318],
        [1756, 2198],
      ],
      title: "Cryptonmicon",
      author: "Neal Stephenson",
      component: Cryptonomicon,
    },
    {
      coords: [
        [2032, 2094],
        [2158, 2091],
        [2368, 2214],
        [2272, 3584],
        [2088, 3590],
        [2056, 3528],
      ],
      title: "Nemesis",
      author: "Isaac Asimov",
    },
    {
      coords: [
        [2268, 3576],
        [2283, 3601],
        [2377, 3598],
        [2478, 2353],
        [2366, 2267],
        [2355, 2336],
      ],
      title: "A Wrinkle in Time",
      author: "Madeleine L'Engle",
      component: AWrinkleInTime,
    },
    {
      coords: [
        [2465, 2489],
        [2392, 3537],
        [2420, 3558],
        [2497, 3547],
        [2547, 2552],
      ],
      title: "Journey to the Center of the Earth",
      author: "Jules Verne",
      component: JourneyToTheCenterOfTheEarth,
    },
    {
      coords: [
        [2507, 3524],
        [2574, 3523],
        [2619, 2433],
        [2481, 2350],
        [2470, 2486],
        [2544, 2544],
      ],
      title: "Fantastic Voyage (1966)",
      author: "",
      component: FantasticVoyage,
      recommended: true,
    },
  ];
</script>

<HamburgerNav {right} {down} />
<ImgOverlay
  {src}
  mapId="books"
  pixelWidth={width}
  alt="Shelf 00: mostly sci-fi"
>
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
