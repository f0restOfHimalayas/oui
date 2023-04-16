import * as YAML from "js-yaml";
import { writable } from 'svelte/store';

let openApi310 = {
    "openapi" : "3.1.0",
    "info" : {
        "title" : "",
        "version" : "1.0.0",
        "summary" : "",
        "description" : "",
        "termsOfService" : "",
        "contact" : {
            "name" : "",
            "email" : ""
        },
        "license" : {
            "name" : "",
        }
    },
    "servers" : [{
        url : "",
        description : ""
    }]
}

const OpenAPIStore = writable(openApi310);

let ToYaml = function ()
{
    console.log(YAML.dump(openApi310));

    return YAML.dump(openApi310, {
        indent: 2,
        forceQuotes : true,
        quotingType : "'"
    })
}

export {
    OpenAPIStore,
    ToYaml,
    openApi310
}
