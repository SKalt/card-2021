<script lang="ts">
  import type { Writable } from "svelte/store";
  import { getContext } from "svelte";
  export let href: string = "";
  export let alt: string = "";
  export let coords: Array<[number, number]> = [];
  let ratio: number = 1;

  const ratioStore: Writable<number> = getContext("ratioStore");
  const draw: Writable<Array<[number, number]>> = getContext("draw");
  ratioStore.subscribe((r) => (ratio = r));
  const handleMouseEnter = () => {
    console.log("mouseenter", href);
    draw.set(transformedCoords);
  };
  const handleMouseLeave = () => {
    console.log("mouseleave", href);
    draw.set([]);
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
