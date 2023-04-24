<script>
    import {OpenApiModel, OpenAPIStore} from "../lib/spec310.js";

    export let Model = [];
    export let FieldsCount = 1;

    const onChange = function () {
        OpenAPIStore.set(OpenApiModel);
    }
</script>
