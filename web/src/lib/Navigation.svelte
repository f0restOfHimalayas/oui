<script>
    import {CurrentPage, PageStore} from "./PageMonitor.js";
    import {onMount} from "svelte";

    const maxPages = 4;
    let prevPage = () => {
        if (CurrentPage <= 1) {
            disableElement('prev')
        } else {
            PageStore.set(CurrentPage - 1)
            enableElement('next')
        }
    }

    let nextPage = () => {
        if (CurrentPage >= maxPages) {
            disableElement('next')
        } else {
            PageStore.set(CurrentPage + 1)
            enableElement('prev')
        }
    }

    const disableElement = (id) => {
        document.getElementById(id).setAttribute('disabled', 'disabled');
    }

    const enableElement = (id) => {
        document.getElementById(id).removeAttribute('disabled');
    }

    onMount(() => {
        if (CurrentPage === 1) {
            disableElement('prev')
            enableElement('next')
        }

        if (CurrentPage === maxPages) {
            disableElement('next')
            enableElement('prev')
        }
    })
</script>

<main class="m-5">
    <button id="prev" class="btn btn-outline-primary" on:click={prevPage}>Prev</button>
    <button id="next" class="btn btn-outline-primary" on:click={nextPage}>Next</button>
</main>
