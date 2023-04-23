<script>
    import {OpenApiModel, OpenAPIStore} from "../lib/spec310.js";
    import ServerVariable from "./ServerVariable.svelte";

    export let Remove = null
    export let Index = 0;
    export let Model = [];
    export let AddNewServerVariableFn = null;
    export let RemoveServerVariableFn = null;
    export let ServerVariables = [];
</script>

<section>
    <div class="m-3">
        <section id="server-{Index}" class="card m-3">
            <div class="row">
                <span class="badge badge bg-success col-1">{Index + 1}.</span>
                <span class="col-9"></span>
                <span id="close-me"
                      class="close btn btn-danger badge badge col-1"
                      on:click={Remove}
                      data-index="{Index}"
                >Remove</span>
            </div>
            <table class="table table-borderless">
                <tr class="row">
                    <td>
                        URL*
                    </td>
                    <td>
                        <input type="url"
                               id="server-url-{Index}"
                               class="form-control"
                               bind:value={Model[Index].url}
                               on:change={ () => { OpenAPIStore.set(OpenApiModel) }}
                               placeholder="REQUIRED. A URL to the target host. This URL supports Server Variables and MAY be relative,
                       to indicate that the host location is relative to the location where the OpenAPI document is being served.
                       Variable substitutions will be made when a variable is named in curly brackets.">
                    </td>
                </tr>
                <tr class="row">
                    <td>Description</td>
                    <td>
                        <input type="text"
                               id="server-description-{Index}"
                               required
                               class="form-control"
                               placeholder="An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation."
                               bind:value={Model[Index].description}
                               on:change={ () => { OpenAPIStore.set(OpenApiModel) }}
                        >
                    </td>
                </tr>
            </table>

            {#each ServerVariables as {}, index}
                <ServerVariable Model="{Model[Index].variables}" ServerIndex="{Index}" Index="{index}"
                                Remove="{RemoveServerVariableFn}"/>
            {/each}
            <section class="m-3">
                <button class="btn btn-outline-primary"
                        on:click="{AddNewServerVariableFn}"
                        data-index="{Index}">
                    Add new server variable
                </button>
            </section>
        </section>
    </div>
</section>
