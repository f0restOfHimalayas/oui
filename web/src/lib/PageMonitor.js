import {writable} from "svelte/store";

let CurrentPage = 0;
let PageStore = writable(CurrentPage);
PageStore.subscribe((page) => {
    CurrentPage = page;
})

export {
    CurrentPage,
    PageStore
};
