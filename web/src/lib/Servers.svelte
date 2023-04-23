<script>
    import PageInformation from "./PageInformation.svelte";
    import {OpenApiModel, OpenAPIStore} from "./spec310.js";
    import Example from "./Example.svelte";
    import Server from "../component/Server.svelte";

    let addNewServerFn = function () {
        OpenApiModel.servers = [...OpenApiModel.servers, {
            url: "",
            description: "",
            variables: {}
        }];
        OpenAPIStore.set(OpenApiModel)
    };

    let removeFn = (e) => {
        let index = getIndex(e.target)
        OpenApiModel.servers.splice(index, 1);
        OpenApiModel.servers = [...OpenApiModel.servers];
        OpenAPIStore.set(OpenApiModel)
    }

    let addNewServerVariableFn = function (e) {
        let index = getIndex(e.target)
        OpenApiModel.servers[index].variables[""] = {}
        OpenAPIStore.set(OpenApiModel)
    }

    let removeServerVariableFn = function (e) {
        let index = getIndex(e.target)
        let serverIndex = parseInt(e.target.getAttribute('data-server-index'));
        let allVariables = OpenApiModel.servers[serverIndex].variables;
        const allKeys = Object.getOwnPropertyNames(allVariables);
        delete allVariables[allKeys[index]];
        OpenApiModel.servers = [...OpenApiModel.servers];
        OpenAPIStore.set(OpenApiModel)
    }

    let getIndex = function (target) {
        return parseInt(target.getAttribute('data-index'));
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
    <div class="m-3">
        <PageInformation heading="Servers"
                         summary="An array of Server Objects, which provide connectivity information to a target server.
                  If the servers property is not provided, or is an empty array, the default value would be a
                  Server Object with a url value of /. Note: As of now `variables` are not supported."/>
        <Example example="{example}"/>

        {#each OpenApiModel.servers as {}, i}
            <Server Remove="{removeFn}"
                    Model="{OpenApiModel.servers}"
                    AddNewServerVariableFn="{addNewServerVariableFn}"
                    RemoveServerVariableFn="{removeServerVariableFn}"
                    ServerVariables="{Object.getOwnPropertyNames(OpenApiModel.servers[i].variables)}"
                    Index="{i}"/>
        {/each}
    </div>

    <section class="m-3">
        <button class="btn btn-outline-dark" on:click={addNewServerFn}>Add new server</button>
    </section>
</section>
