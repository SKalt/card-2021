<script lang="ts">
  export let title: string;
  export let author = "";
  export let display = false;
  const reset = () => {
    display = false;
    window.history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  };
</script>

<div class:display>
  <!-- TODO: close-input -->
  <button on:click={reset} class="close"> X </button>
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
