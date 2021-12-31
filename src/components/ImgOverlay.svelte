<script lang="ts">
  import type { Coords } from "src/routes/common";

  import { onMount, getContext, setContext } from "svelte";
  import { writable } from "svelte/store";

  const ratioStore = writable<number>(1);
  setContext("ratioStore", ratioStore);

  export let mapId: string;
  export let src: string;
  export let pixelWidth: number;
  export let alt: string;
  let canvas: HTMLCanvasElement;
  const sharedContext = writable<HTMLCanvasElement>(canvas);
  setContext("canvasStore", sharedContext);
  let ctx: CanvasRenderingContext2D;
  let img: HTMLImageElement;
  let dbg: HTMLElement;
  let ratio: number = 1;

  const handleResize = () => {
    setRatio(pixelWidth, img?.width || 1);
    // alert(`resized to ${ratio}`);
    if (canvas) {
      canvas.width = img.width;
      canvas.height = img.height;
    }
  };
  const debugMousePosition = (e: MouseEvent) => {
    dbg.textContent =
      (e.offsetX / ratio).toFixed(1) + "," + (e.offsetY / ratio).toFixed(1);
  };
  const setRatio = (pixelWidth: number, screenWidth: number) => {
    ratio = pixelWidth / (screenWidth || 1);
    ratioStore.set(ratio);
    console.log(`set ratio to ${ratio}`);
  };
  $: sharedContext.set(canvas);
  onMount(() => {
    handleResize();
    sharedContext.set(canvas);
  });
</script>

<svelte:window on:resize={handleResize} />

<div class="container">
  <map name={mapId}>
    <slot />
  </map>
  <img
    {src}
    {alt}
    usemap="#{mapId}"
    on:load={handleResize}
    on:resize={handleResize}
    on:mousemove={debugMousePosition}
    bind:this={img}
  />
  <canvas bind:this={canvas} style="pointer-events: none" />
  <span bind:this={dbg} />
</div>

<style>
  div.container {
    width: 100vw;
    /* min-width: 1600px; */
  }
  span {
    display: none;
    position: fixed;
    background-color: #fff;
    color: #000;
    bottom: 1;
    left: 0;
    font-family: monospace;
    font-size: larger;
  }
  canvas,
  img {
    width: 100%;
    opacity: 1;
  }
  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
