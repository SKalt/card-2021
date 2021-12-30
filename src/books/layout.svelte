<script>
  export let library;
  export let gooreads;
  export let ebook;
</script>

<!-- markdown content -->
<slot />

<div class="">
  <a href={library} target="_blank" referrerpolicy="no-referrer">library</a>
  <a href={ebook} target="_blank" referrerpolicy="no-referrer">ebook</a>
  <a href={gooreads} target="_blank" referrerpolicy="no-referrer">gooreads</a>
</div>
