<script>
    import PageInformation from "./PageInformation.svelte";
</script>

<section>
    <div class="card m-3">
        <PageInformation heading="Paths"
                         summary="The available paths and operations for the API.
                         Holds the relative paths to the individual endpoints and their operations. The path is appended
                         to the URL from the Server Object in order to construct the full URL. The Paths MAY be empty,
                         due to Access Control List (ACL) constraints."/>
    </div>
</section>
