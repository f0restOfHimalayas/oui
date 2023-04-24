<script>
    import {OpenApiModel, OpenAPIStore} from "../lib/spec310.js";
    import {PathKeyStore} from "../lib/PathKeyUpdateMonitor.js";

    export let Model;

    let url;
    let description;
    let Key = "";

    const update = () => {
        if (Key) {
            Model[Key].url = url;
            Model[Key].description = description;
        }
    }

    const onChange = function () {
        update();
        OpenAPIStore.set(OpenApiModel);
    }

    PathKeyStore.subscribe((key) => {
        Key = key;
        update();
    });

</script>
<section class="card">
    <section class="card-header">
        <span>External Documentation</span>
    </section>
    <section class="card-body">
        <table class="table table-borderless">
            <tr class="row">
                <td>
                    Url*
                </td>
                <td>
                    <input type="text"
                           name="url"
                           id="url"
                           bind:value={url}
                           on:change={onChange}
                           class="form-control"
                           placeholder="The URL for the target documentation. This MUST be in the form of a URL."/>
                </td>
            </tr>
            <tr class="row">
                <td>
                    Description
                </td>
                <td>
                    <input type="text"
                           name="description"
                           id="description"
                           bind:value={description}
                           on:change={onChange}
                           class="form-control"
                           placeholder="A description of the target documentation. CommonMark syntax MAY be used for rich text representation."/>
                </td>
            </tr>
        </table>
    </section>
</section>
