<script>

    import {OpenApiModel, OpenAPIStore} from "../lib/spec310.js";
    import {PathKeyStore} from "../lib/PathKeyUpdateMonitor.js";

    export let Model = null;
    export let Id = "";
    export let Placeholder = ""

    let lastValue = ""
    let inputValue = "";

    const updateFn = () => {
        delete Model[lastValue]
        Model[inputValue] = {}

        lastValue = inputValue;

        OpenAPIStore.set(OpenApiModel);
        PathKeyStore.set(inputValue);
    }
</script>

<input type="text"
       id="{Id}"
       class="form-control"
       placeholder="{Placeholder}"
       on:change={updateFn}
       bind:value={inputValue}/>
