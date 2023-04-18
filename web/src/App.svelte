<script>
  import Root from './lib/Root.svelte'
  import Preview from "./lib/Preview.svelte";
  import Navigation from "./lib/Navigation.svelte";
  import Breadcrumb from "./lib/Breadcrumb.svelte";
</script>

<main>
    <Breadcrumb />
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
