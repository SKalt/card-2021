<script>
  export let goodreads;
</script>

<!-- markdown content -->
<slot />

<div>
  <a href={goodreads} target="_blank" referrerpolicy="no-referrer">goodreads</a>
</div>

<style>
  div {
    display: flex;
  }
</style>
