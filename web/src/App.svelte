<script>
  import Root from './lib/Root.svelte'
  import Preview from "./lib/Preview.svelte";
  import Navigation from "./lib/Navigation.svelte";
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

    <section class="card font-monospace">
        <Root />
    </section>
    <section>
        <Navigation />
    </section>
    <section>
        <Preview />
    </section>
</main>
