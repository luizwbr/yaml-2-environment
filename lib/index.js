"use strict";

const { load } = require("js-yaml");
const { readFileSync } = require("fs");

function parse(src) {
    const result = load(src);
    return result ? result : {};
}

function config(options) {
    const path = ".env.yml";
    const encoding = "utf8";
    const namespace = null;

    if (options) {
        if (options.path) {
            path = options.path;
        }
        if (options.encoding) {
            encoding = options.encoding;
        }
        if (options.namespace) {
            namespace = options.namespace;
        }
    }

    try {
        const parsedDoc = parse(
            readFileSync(path, {
                encoding: encoding
            })
        );
        // namespace
        const configObject = namespace ? parsedDoc[namespace] : parsedDoc;
        Object.keys(configObject).forEach(function(key) {
            const value = configObject[key];
            // nested items
            const parsedValue = typeof value === 'string' ? value : JSON.stringify(value)
            process.env[key] = process.env[key] || parsedValue;
        });

        return {
            parsed: configObject
        };
    } catch (e) {
        return {
            error: e
        };
    }
}

module.exports.config = config;
module.exports.load = config;
module.exports.parse = parse;
