<script lang="ts">
  import HamburgerNav from "../../components/HamburgerNav.svelte";

  import { src } from "../../img/12.jpg?webp&quality=50&metadata";
</script>

<HamburgerNav up="../01/" left="../11/" down="../21/" />
<div>
  <img {src} alt="Peanut enjoying his cat-castle" />
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    max-width: 100vw;
    max-height: 100vh;
  }
</style>
