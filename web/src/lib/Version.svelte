<script>
    import {OpenApiModel, OpenAPIStore} from "./spec310.js";
</script>

<h5>
    Introduction (Root)
</h5>
<main>
    <table class="table table-borderless">
        <tr class="row">
            <td class="p-1">
                <p class="h6 left-align">
                    <span class="badge bg-success">open api</span>
                    <span class="badge bg-danger">Required</span>
                    <span class="badge bg-primary">string</span>
                </p>
            </td>
        </tr>
        <tr class="row">
            <td class="p-2">
                <p class="lh-1 text-muted font-monospace left-align">
                    The OpenAPI Specification is versioned using a major.minor.patch versioning scheme. The major.minor
                    portion of the version string (for example 3.1) SHALL designate the OAS feature set. .patch versions
                    address errors in, or provide clarifications to, this document, not the feature set. Tooling which
                    supports OAS 3.1 SHOULD be compatible with all OAS 3.1.* versions. The patch version SHOULD NOT be
                    considered by tooling, making no distinction between 3.1.0 and 3.1.1 for example.Occasionally,
                    non-backwards compatible changes may be made in minor versions of the OAS (Open API spec) where
                    impact is believed to be low relative to the benefit provided.
                </p>
                <p class="lh-1 left-align">
                    An OpenAPI document compatible with OAS 3.*.* contains a
                    required openapi field which designates the version of the OAS that it uses.
                </p>
            </td>
        </tr>
        <tr class="row">
            <td class="left-align">
                <p class="font-monospace">
                    Select open API version
                </p>
                <p>
                    <select id="version"
                            class="form-select"
                            bind:value={OpenApiModel.openapi}
                            on:change={ () => { OpenAPIStore.set(OpenApiModel) } }
                    >
                        <option value="3.1.0">
                            3.1.0 (latest)
                        </option>
                        <option value="3.0.3">
                            3.0.3
                        </option>
                        <option value="3.0.1">
                            3.0.1
                        </option>
                        <option value="3.0.0">
                            3.0.0
                        </option>
                    </select>
                </p>
            </td>
        </tr>
    </table>
</main>
