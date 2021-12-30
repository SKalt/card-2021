<script lang="ts">
  import { snake_case } from "../routes/common";

  import HoverableArea from "./HoverableArea.svelte";
  export let title: string = "";
  export let author: string = "";
  export let coords: Array<[number, number]> = [];
  $: href = `#${snake_case(title)}`;
  $: alt = `${title} by ${author}`;
</script>

<HoverableArea {coords} {href} {alt} />
