<script>
    import {OpenApiModel} from "../lib/spec310.js";
    import KeyTextBox from "./KeyTextBox.svelte";
    import ExternalDoc from "./ExternalDoc.svelte";
    import Reference from "./Reference.svelte";

    export let RemoveFn = null;
    export let Methods = []
</script>

<section id='paths' class="card m-3">
    <div class="row">
        <span class="badge badge bg-success col-1">{OpenApiModel.paths}</span>
        <span class="col-9"></span>
        <span id='close-me'
              class='close- btn btn-danger badge badge col-1'
              on:click={RemoveFn}
              data-index=''
        >Remove</span>
    </div>
    <table class="table table-borderless">
        <tr class="row">
            <td>
                Path*
            </td>
            <td>
                <KeyTextBox Model="{OpenApiModel}"
                            Id="path"
                            Placeholder="A relative path to an individual endpoint. The field name MUST begin with a forward slash (/). The path is appended (no relative URL resolution) to the expanded URL
                               from the Server Object's url field in order to construct the full URL. Path templating is
                               allowed. When matching URLs, concrete (non-templated) paths would be matched before their
                               templated counterparts. Templated paths with the same hierarchy but different templated
                               names MUST NOT exist as they are identical. In case of ambiguous matching, it's up to the
                               tooling to decide which one to use."
                />
            </td>
        </tr>
        <tr class="row">
            <td>
                Summary
            </td>
            <td>
                <input type="text"
                       id="summary"
                       class="form-control"
                       placeholder="Summary of the endpoint"
                >
            </td>
        </tr>
        <tr class="row">
            <td>
                Description
            </td>
            <td>
                <input type="text"
                       id="description"
                       class="form-control"
                       placeholder="Description of the endpoint"
                >
            </td>
        </tr>
        <tr class="row">
            <td>
                Operation
            </td>
            <td>
                <select class="form-control">
                    {#each Methods as method}
                        <option id="{method}">
                            {method}
                        </option>
                    {/each}
                </select>
            </td>
        </tr>
    </table>
    <ExternalDoc Model="{OpenApiModel}"/>
    <Reference></Reference>
</section>
