<script>
    export let Model;
</script>


<section class="m-3 card">
    <section class="card-header">
        <span>Reference</span>
    </section>
    <section class="card-title">
        <span>
            A simple object to allow referencing other components in the OpenAPI document, internally and externally.
            The $ref string value contains a URI RFC3986, which identifies the location of the value being referenced.A simple object to allow referencing other components in the OpenAPI document, internally and externally.
            The $ref string value contains a URI RFC3986, which identifies the location of the value being referenced.
        </span>
    </section>
    <section class="card-body">
        <table class="table table-borderless">
            <tr class="row">
                <td>
                    $ref* [REQUIRED]. The reference identifier. This MUST be in the form of a URI.
                </td>
                <td>
                    <input type="text" name="ref" id="ref" class="form-control"/>
                </td>
            </tr>
            <tr class="row">
                <td>
                    Summary
                </td>
                <td>
                    <input type="text" name="summary" id="summary" class="form-control"/>
                </td>
            </tr>
            <tr class="row">
                <td>
                    Description
                </td>
                <td>
                    <input type="text" name="description" id="description" class="form-control"/>
                </td>
            </tr>
        </table>
    </section>
</section>
