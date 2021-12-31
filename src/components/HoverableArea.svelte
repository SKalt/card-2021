<script lang="ts">
  import type { Writable } from "svelte/store";
  import { clear, defaultDraw } from "../routes/common";
  import type { Coords } from "../routes/common";
  import { getContext } from "svelte";
  export let draw: (ctx: HTMLCanvasElement, coords: Coords) => void =
    defaultDraw;
  export let href: string = "";
  export let alt: string = "";
  export let coords: Array<[number, number]> = [];
  let ratio: number = 1;
  const ratioStore: Writable<number> = getContext("ratioStore");
  let canvas: HTMLCanvasElement;
  const canvasStore: Writable<HTMLCanvasElement> = getContext("canvasStore");
  ratioStore.subscribe((r) => (ratio = r));
  canvasStore.subscribe((c) => (canvas = c));

  const handleMouseEnter = () => {
    if (canvas) {
      draw(canvas, transformedCoords);
    }
  };
  const handleMouseLeave = () => {
    if (canvas) clear(canvas);
  };
  $: transformedCoords = coords.map(
    (coord) => coord.map((n) => n / ratio) as [number, number]
  );
  $: strCoords = transformedCoords.map((coord) => coord.join(",")).join(",");
</script>

<area
  shape="poly"
  coords={strCoords}
  {alt}
  {href}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
/>
