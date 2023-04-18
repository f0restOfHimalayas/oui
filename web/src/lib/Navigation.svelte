<script>
    import {CurrentPage, PageStore} from "./PageMonitor.js";
    import {onMount} from "svelte";

    const minPage = 0;
    const maxPages = 3
    let prevPage = () => {
        PageStore.set(CurrentPage - 1)
    }

    let nextPage = () => {
        PageStore.set(CurrentPage + 1)
    }

    const disableElement = (id) => {
        document.getElementById(id)?.setAttribute('disabled', 'disabled');
    }

    const enableElement = (id) => {
        document.getElementById(id)?.removeAttribute('disabled');
    }

    PageStore.subscribe((page) => {
        if (page >= maxPages) {
            disableElement('next')
        } else if (page <= minPage) {
            disableElement('prev')
        } else {
            enableElement('prev')
            enableElement('next')
        }
    });

    onMount(() => {
        if (CurrentPage === minPage) {
            disableElement('prev')
            enableElement('next')
        }

        if (CurrentPage === maxPages) {
            disableElement('next')
            enableElement('prev')
        }
    });

</script>

<main class="m-5">
    <button id="prev" class="btn btn-outline-primary" on:click={prevPage}>Prev</button>
    <button id="next" class="btn btn-outline-primary" on:click={nextPage}>Next</button>
</main>
