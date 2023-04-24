import {writable} from "svelte/store";

let Key = "";
let PathKeyStore = writable(Key);
PathKeyStore.subscribe((key) => {
    Key = key;
})

export {
    Key,
    PathKeyStore
};
