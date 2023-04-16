<script>
    import {OpenAPIStore, ToYaml} from "./spec310.js";

    let preview;
    $: {
        preview = ToYaml($OpenAPIStore)
    }

    let copy = (e) => {
        navigator.clipboard.writeText(e.target.innerText);
        alert('YAML copied to clipboard')
    }
</script>
<section class="card left-align" style="background-color: #1a1a1a; color: greenyellow;" on:click={copy}>
    <p class="badge">click anywhere to copy</p>
    <pre id="preview">{preview}</pre>
</section>


<style>
    section:hover {
        cursor : pointer;
    }
</style>
