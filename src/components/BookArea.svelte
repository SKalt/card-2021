<script lang="ts">
  import { defaultDraw, snake_case, recommendedDraw } from "../routes/common";

  import HoverableArea from "./HoverableArea.svelte";
  export let title: string = "";
  export let author: string = "";
  export let coords: Array<[number, number]> = [];
  export let recommended: boolean = false;
  const draw = recommended ? recommendedDraw : defaultDraw;
  $: href = `#${snake_case(title)}`;
  $: alt = `${title} by ${author}`;
</script>

<HoverableArea {draw} {coords} {href} {alt} />
