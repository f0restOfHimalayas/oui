<script>
    import PageInformation from "./PageInformation.svelte";
    import {OpenApiModel, OpenAPIStore} from "./spec310.js";
    import Example from "./Example.svelte";

    let addNewServer = function () {
        OpenApiModel.servers = [...OpenApiModel.servers, {
            url: "",
            description: ""
        }];
    };

    let remove = (e) => {
        let index = e.target.attributes["data-index"];
        OpenApiModel.servers.splice(index, 1);
        OpenApiModel.servers = [...OpenApiModel.servers];
        OpenAPIStore.set(OpenApiModel)
    }

    const example = `
        servers:
        - url: https://development.gigantic-server.com/v1
          description: Development server
        - url: https://staging.gigantic-server.com/v1
          description: Staging server
        - url: https://api.gigantic-server.com/v1
          description: Production server

Example 2: Using variables

       servers:
       - url: https://{username}.gigantic-server.com:{port}/{basePath}
         description: The production API server
         variables:
           username:
             # note! no enum here means it is an open value
             default: demo
             description: this value is assigned by the service provider, in this example \`gigantic-server.com\`
           port:
             enum:
               - '8443'
               - '443'
             default: '8443'
           basePath:
             # open meaning there is the opportunity to use special base paths as assigned by the provider, default is \`v2\`
             default: v2
    `;
</script>

<section>
    <div class="card m-3">
        <PageInformation heading="Servers"
                         summary="An array of Server Objects, which provide connectivity information to a target server.
                  If the servers property is not provided, or is an empty array, the default value would be a
                  Server Object with a url value of /. Note: As of now `variables` are not supported."/>
        <Example example="{example}" />

        {#each OpenApiModel.servers as {id, url, description}, i}
            <section id="servers-{i}" class="card m-3">
                <div class="row">
                    <span class="badge badge bg-success col-1">{i + 1}.</span>
                    <span class="col-9"></span>
                    <span id="close-me-{i}"
                          class="close-{i} btn btn-danger badge badge col-1"
                          on:click={remove}
                          data-index="{i}"
                    >Remove</span>
                </div>
                <table class="table table-borderless">
                    <tr class="row">
                        <td>
                            URL*
                        </td>
                        <td>
                            <input type="url"
                                   id="server-url-{i}"
                                   class="form-control"
                                   bind:value={OpenApiModel.servers[i]["url"]}
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
                                   id="server-description-{i}"
                                   required
                                   class="form-control"
                                   placeholder="An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation."
                                   bind:value={OpenApiModel.servers[i]["description"]}
                                   on:change={ () => { OpenAPIStore.set(OpenApiModel) }}
                            >
                        </td>
                    </tr>
                </table>
            </section>
        {/each}
    </div>

    <section class="m-3">
        <button class="btn btn-dark" on:click={addNewServer}>Add new server</button>
    </section>
</section>
