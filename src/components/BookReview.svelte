<script lang="ts">
  import { snake_case } from "../routes/common";
  import { onMount } from "svelte";

  export let title: string;
  export let author = "";
  let display = false;

  const setDisplay = () => {
    display = window.location.hash.slice(1) == snake_case(title);
  };
  onMount(setDisplay);

  const reset = () => {
    display = false;
    window.history.replaceState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  };
</script>

<svelte:window on:hashchange={setDisplay} />

<div class:display>
  <button on:click={reset} class="close">&times</button>
  <h2>{title}</h2>
  {#if author}
    <span>by</span>&nbsp;<b>{author}</b>
  {/if}
  <slot />
  <!-- ^ for markdown component -->
</div>

<style>
  div {
    display: none;
    /* centered */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(256, 256, 256, 0.85);
    padding: 2rem;
    max-width: 800px;
    max-height: 400px;
    width: 80vw;
  }
  h2 {
    margin-top: 0;
  }
  div.display {
    display: block;
  }
  button.close {
    position: absolute;
    display: inline;
    top: 0.5rem;
    right: 0.5rem;
  }
</style>
