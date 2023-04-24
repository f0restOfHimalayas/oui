<script>
    import PageInformation from "./PageInformation.svelte";
    import {OpenApiModel, OpenAPIStore} from "./spec310.js";
    import Example from "./Example.svelte";
    import Path from "../component/Path.svelte";

    const methods = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']

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

        <Path Methods="{methods}"/>
    </div>
</section>
