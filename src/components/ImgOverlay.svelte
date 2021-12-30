<script lang="ts">
  import { onMount, getContext, setContext } from "svelte";
  import { writable } from "svelte/store";
  const draw = writable<Array<[number, number]>>([]);
  setContext("draw", draw);
  const ratioStore = writable<number>(1);
  setContext("ratioStore", ratioStore);
  export let mapId: string;
  export let src: string;
  export let pixelWidth: number;
  export let alt: string;
  let canvas: HTMLCanvasElement;
  let img: HTMLImageElement;
  let dbg: HTMLElement;
  let ratio: number = 1;

  const handleResize = () => {
    console.log("resizing", img);
    setRatio(pixelWidth, img?.width || 1);
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
  };
  $: setRatio(pixelWidth, img?.width);
  $: draw.subscribe((coords) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!coords.length)
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    else {
      const _coords = [...coords];
      const [x, y] = _coords.pop();
      ctx.lineWidth = 4;
      ctx.strokeStyle = "#fff";
      ctx.moveTo(x, y);
      ctx.beginPath();
      while (_coords.length) {
        let [x, y] = _coords.pop();
        ctx.lineTo(x, y);
      }
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
    }
  });
</script>

<div class="container">
  <map name={mapId}>
    <slot />
  </map>
  <img
    {src}
    {alt}
    usemap="#{mapId}"
    on:load={() => {
      handleResize();
      alert(`${img.width} x ${img.height}`);
    }}
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
