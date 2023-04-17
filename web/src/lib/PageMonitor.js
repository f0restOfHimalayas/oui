import {writable} from "svelte/store";

let CurrentPage = 1;
let PageStore = writable(CurrentPage);
PageStore.subscribe((page) => {
    CurrentPage = page;
})

export {
    CurrentPage,
    PageStore
};
