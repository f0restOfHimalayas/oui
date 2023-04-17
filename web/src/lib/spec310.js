import * as YAML from "js-yaml";
import {writable} from 'svelte/store';

let OpenApiModel = {
    "openapi": "3.1.0",
    "info": {
        "title": "",
        "version": "1.0.0",
        "summary": "",
        "description": "",
        "termsOfService": "",
        "contact": {
            "name": "",
            "email": ""
        },
        "license": {
            "name": "",
        }
    },
    "servers": [{
        url: "",
        description: ""
    }],
    "paths": {}
}

const OpenAPIStore = writable(OpenApiModel);

const ToYaml = (updatedOpenApiObj) => {
    console.log(YAML.dump(updatedOpenApiObj));

    return YAML.dump(updatedOpenApiObj, {
        indent: 2,
        forceQuotes: true,
        quotingType: "'"
    })
}

export {
    OpenAPIStore,
    ToYaml,
    OpenApiModel
}
