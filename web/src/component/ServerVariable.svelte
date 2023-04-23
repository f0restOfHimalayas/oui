<script>
    import {OpenApiModel, OpenAPIStore} from "../lib/spec310.js";

    export let Index = 0;
    export let ServerIndex = 0;
    export let Remove = null;
    export let Model = {}
    let key = "";
    let enumValue = "";
    let defaultValue = "";
    let descriptionValue = "";

    const AddKey = function () {
        const props = Object.getOwnPropertyNames(Model)
        const oldKey = props[Index];
        delete Object.assign(Model, {[key]: Model[oldKey]})[oldKey];
        OpenApiModel.servers = [...OpenApiModel.servers]
        OpenAPIStore.set(OpenApiModel)
    }

    const updateModel = () => {
        Model[key].enum = enumValue;
        Model[key].default = defaultValue;
        Model[key].description = descriptionValue;
        OpenAPIStore.set(OpenApiModel)
    }
</script>

<section class="card mb-3" style="border: 1px solid darkslategrey; box-shadow: 1px 1px 3px 1px  #1a1a1a">
    <div class="row col-3 mb-3 badge bg-secondary">Server variables</div>
    <div class="row">
        <span class="badge badge bg-success col-1">{Index + 1}.</span>
        <span class="col-9"></span>
        <span id="close-me"
              class="close btn btn-danger badge badge col-1"
              on:click={Remove}
              data-index="{Index}"
              data-server-index="{ServerIndex}"
        >Remove</span>
    </div>
    <table class="table table-borderless">
        <tr class="row">
            <td>
                Key*
            </td>
            <td>
                <input type="text"
                       name="key"
                       placeholder="key"
                       class="form-control"
                       bind:value={key}
                       on:change={AddKey}
                />
            </td>
        </tr>
        <tr class="row">
            <td>Enum</td>
            <td>
                <input type="text"
                       name="enum"
                       class="form-control"
                       bind:value={enumValue}
                       on:change={updateModel}
                       placeholder="An enumeration of string values to be used if the substitution options are from a limited set. The array MUST NOT be empty."/>
            </td>
        </tr>
        <tr class="row">
            <td>
                Default*
            <td>
                <input type="text"
                       name="default"
                       id="default"
                       class="form-control"
                       bind:value={defaultValue}
                       on:change={updateModel}
                       placeholder="The default value to use for substitution"/>
            </td>
        </tr>
        <tr class="row">
            <td>
                Description
            <td>
                <input type="text"
                       name="default"
                       id="description"
                       class="form-control"
                       bind:value={descriptionValue}
                       on:change={updateModel}
                       placeholder="The description for the server variables."/>
            </td>
        </tr>
    </table>
</section>
