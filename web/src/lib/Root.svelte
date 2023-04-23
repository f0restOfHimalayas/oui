<script>
    import Version from "./Version.svelte";
    import Info from "./Info.svelte";
    import Servers from "./Servers.svelte";
    import Paths from "./Paths.svelte";
    import {PageStore} from "./PageMonitor.js";

    let page = 1;
    $: {
        page = $PageStore;
    }

</script>

{#if page === 0}
    <Version/>
{:else if page === 1}
    <Info/>
{:else if page === 2}
    <Servers/>
{:else if page === 3}
    <Paths/>
{:else }
{/if}
