<script>
    import {OpenAPIStore, ToYaml} from "./spec310.js";

    let preview;
    $: {
        preview = ToYaml($OpenAPIStore)
    }
</script>
<section class="card left-align" style="background-color: #1a1a1a; color: greenyellow;">
    <pre>{preview}</pre>
</section>
