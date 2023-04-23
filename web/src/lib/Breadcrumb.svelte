<script>
    import {PageStore} from "./PageMonitor.js";

    PageStore.subscribe((page) => {
        let elements = document.querySelectorAll('a.nav-link');
        elements.forEach((element, index) => {
            if (page === index) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    });

    const linkMap = [{
        id: 0,
        active: true,
        text: "Open API Version",
    }, {
        id: 1,
        active: false,
        text: "General Information and Summary",
    }, {
        id: 2,
        active: false,
        text: "Servers",
    }, {
        id: 3,
        active: false,
        text: "Paths",
    }];

    const activateTab = (e) => {
        const element = e.target;
        let clickedIndex = parseInt(element.getAttribute('data-index'));
        PageStore.set(clickedIndex);
    }

</script>
<section>
    <ul class="nav nav-underline">
        {#each linkMap as {id, active, text}, i}
            <li id="{id}" data-index="{id}" class="nav-item" on:click={activateTab}>
                <a id="link-{id}" data-index="{id}" class="nav-link {active ? 'active' : ''}">{text}</a>
            </li>
        {/each}
    </ul>
</section>


<style>
    li:hover {
        cursor: pointer;
    }
</style>
