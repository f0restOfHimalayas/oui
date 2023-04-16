<script>
    import Example from "./Example.svelte";
    import {openApi310, OpenAPIStore} from "./spec310.js";
    import PageInformation from "./PageInformation.svelte";

    const example = `    title: Sample Pet Store App
    summary: A pet store manager.
    description: This is a sample server for a pet store.
    termsOfService: https://example.com/terms/
    contact:
      name: API Support
      url: https://www.example.com/support
      email: support@example.com
    license:
      name: Apache 2.0
      url: https://www.apache.org/licenses/LICENSE-2.0.html
    version: 1.0.1`;
</script>

<div class="card">
    <PageInformation heading="General Information"
                     summary="Provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented in
        editing or documentation generation tools for convenience."
    />
    <section class="m-3">
        <table class="table table-borderless">
            <tr class="row">
                <td>
                    Document Version* (Different from the Open API spec version)
                </td>
                <td>
                    <input type="text"
                           id="api-version"
                           class="form-control"
                           bind:value={openApi310.info["version"]}
                           on:change={ () => { OpenAPIStore.set(openApi310) }}
                           placeholder="REQUIRED. The version of this Open API document. eg: 1.0.0">
                </td>
            </tr>
            <tr class="row">
                <td>Title*</td>
                <td>
                    <input type="text"
                           id="title"
                           required
                           class="form-control"
                           placeholder="REQUIRED. The title of the API."
                           bind:value={openApi310.info["title"]}
                           on:change={ () => { OpenAPIStore.set(openApi310) }}
                    >
                </td>
            </tr>
            <tr class="row">
                <td>Summary</td>
                <td>
                    <input type="text"
                           id="summary"
                           class="form-control"
                           placeholder="A short summary of the API."
                           bind:value={openApi310.info["summary"]}
                           on:change={ () => { OpenAPIStore.set(openApi310) }}
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
                           placeholder="A description of the API. CommonMark syntax MAY be used for rich text representation."
                           bind:value={openApi310.info["description"]}
                           on:change={ () => { OpenAPIStore.set(openApi310) }}
                    >
                </td>
            </tr>
            <tr class="row">
                <td>
                    Terms of Service
                </td>
                <td>
                    <input type="url"
                           id="termsOfService"
                           class="form-control"
                           placeholder="A URL to the Terms of Service for the API. This MUST be in the form of a URL."
                           bind:value={openApi310.info["termsOfService"]}
                           on:change={ () => { OpenAPIStore.set(openApi310) }}
                    >
                </td>
            </tr>
            <tr class="row">
                <td>
                    Contact Name
                </td>
                <td>
                    <input type="text"
                           id="contact-name"
                           class="form-control"
                           placeholder="The identifying name of the contact person/organization."
                           bind:value={openApi310.info["contact"]["name"]}
                           on:change={ () => { OpenAPIStore.set(openApi310) }}
                    >
                </td>
            </tr>
            <tr class="row">
                <td>
                    Contact URL
                </td>
                <td>
                    <input type="url"
                           id="contact-url"
                           class="form-control"
                           placeholder="The URL pointing to the contact information. This MUST be in the form of a URL."
                           bind:value={openApi310.info["contact"]["url"]}
                           on:change={ () => { OpenAPIStore.set(openApi310) }}
                    >
                </td>
            </tr>
            <tr class="row">
                <td>
                    Contact Email
                </td>
                <td>
                    <input type="email"
                           id="contact-email"
                           class="form-control"
                           placeholder="The email address of the contact person/organization. This MUST be in the form of an email address."
                           bind:value={openApi310.info["contact"]["email"]}
                           on:change={ () => { OpenAPIStore.set(openApi310) }}
                    >
                </td>
            </tr>
            <tr class="row">
                <td>
                    License*
                </td>
                <td>
                    <input type="text"
                           id="license-name"
                           class="form-control"
                           placeholder="REQUIRED. The license name used for the API."
                           bind:value={openApi310.info["license"]["name"]}
                           on:change={ () => { OpenAPIStore.set(openApi310) }}
                    >
                </td>
            </tr>
            <tr class="row">
                <td>
                    License Identifier
                </td>
                <td>
                    <input type="text"
                           id="license-identifier"
                           class="form-control"
                           placeholder="An SPDX license expression for the API. The identifier field is mutually exclusive of the url field."
                           bind:value={openApi310.info["license"]["identifier"]}
                           on:change={ () => { OpenAPIStore.set(openApi310) }}
                    >
                </td>
            </tr>
            <tr class="row">
                <td>
                    License URL
                </td>
                <td>
                    <input type="url"
                           id="license-url"
                           class="form-control"
                           placeholder="A URL to the license used for the API. This MUST be in the form of a URL. The url field is mutually exclusive of the identifier field."
                           bind:value={openApi310.info["license"]["url"]}
                           on:change={ () => { OpenAPIStore.set(openApi310) }}
                    >
                </td>
            </tr>
        </table>
    </section>
    <section>
        <Example example="{example}"/>
    </section>

</div>
