<script>
  import Root from './lib/Root.svelte'
  let preview = "preview";
  function callbackFunction(event) {
      console.log(event)
      preview = event.detail;
  }

</script>

<main>
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Introduction</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
        </li>
    </ul>

    <section class="card">
        <Root on:notify="{callbackFunction}" />
    </section>

    <section class="preview card m-3">
        {preview}
    </section>
</main>
