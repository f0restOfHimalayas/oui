<script>
    import PageInformation from "./PageInformation.svelte";
    import {OpenApiModel, OpenAPIStore} from "./spec310.js";
    import Example from "./Example.svelte";

    const methods = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']

    let addNewPath = function (e) {
        let pathTextBox = e.target;
        let path = pathTextBox.value;
        if (OpenApiModel.paths[path] === undefined || OpenApiModel.paths[path] === null) {
            OpenApiModel.paths[path] = {}
        }
        for (const currentPath in OpenApiModel.paths) {
        }
        OpenAPIStore.set(OpenApiModel)
    }

    let getAllParents = function (htmlElement, value) {
        let parentsIdentifiers = ['span#close-me', 'section#paths']
        let parents = [];
        for (const parentsIdentifiersKey in parentsIdentifiers) {
            let currVal = htmlElement.getAttribute('id')
            htmlElement.setAttribute('id', `${currVal}-${value}`)
        }

        return parents;
    }

    let removeFn = (e) => {
        let index = e.target.attributes["data-index"];
        OpenApiModel.paths.splice(index, 1);
        OpenApiModel.paths = [...OpenApiModel.paths];
        OpenAPIStore.set(OpenApiModel)
    }

    const example = `/pets:
      get:
        description: Returns all pets from the system that the user has access to
        responses:
          '200':
            description: A list of pets.
            content:
              application/json:
                schema:
                  type: array
                  items:
                    $ref: '#/components/schemas/pet'`;
</script>

<section>
    <div class="m-3">
        <PageInformation heading="Paths"
                         summary="The available paths and operations for the API.
                         Holds the relative paths to the individual endpoints and their operations. The path is appended
                         to the URL from the Server Object in order to construct the full URL. The Paths MAY be empty,
                         due to Access Control List (ACL) constraints."/>

        <Example example="{example}"/>

        <section id='paths' class="card m-3">
            <div class="row">
                <span class="badge badge bg-success col-1">{OpenApiModel.paths}</span>
                <span class="col-9"></span>
                <span id='close-me'
                      class='close- btn btn-danger badge badge col-1'
                      on:click={removeFn}
                      data-index=''
                >Remove</span>
            </div>
            <table class="table table-borderless">
                <tr class="row">
                    <td>
                        Path*
                    </td>
                    <td>
                        <input type="text"
                               id='path'
                               class="form-control"
                               on:change={addNewPath}
                               placeholder="A relative path to an individual endpoint. The field name MUST begin with a
                               forward slash (/). The path is appended (no relative URL resolution) to the expanded URL
                               from the Server Object's url field in order to construct the full URL. Path templating is
                               allowed. When matching URLs, concrete (non-templated) paths would be matched before their
                               templated counterparts. Templated paths with the same hierarchy but different templated
                               names MUST NOT exist as they are identical. In case of ambiguous matching, it's up to the
                               tooling to decide which one to use.">
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
                            {#each methods as method}
                                <option id="{method}">
                                    {method}
                                </option>
                            {/each}
                        </select>
                    </td>
                </tr>
            </table>
        </section>
    </div>
</section>
