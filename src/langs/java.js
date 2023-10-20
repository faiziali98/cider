"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaLanguageHandler = void 0;
const java_parser_1 = require("java-parser");
const utils_1 = require("../utils/utils");
const getIdentifiers = (rootNode) => {
    const traverseCst = (node, visitor) => {
        const nodeChildren = node.children;
        if (!!node.children) {
            const nodeChildrenList = Object.entries(nodeChildren);
            nodeChildrenList.forEach((child) => {
                const nextArray = child[1];
                nextArray.length > 0 && traverseCst(child[1][0], visitor);
            });
        }
        else {
            visitor(node);
        }
    };
    // A utility function to print the class names
    const getAllNames = (cst) => {
        const classNames = new Set([]);
        traverseCst(cst, (node) => {
            !!node.image
                && node.tokenType.name === 'Identifier'
                && classNames.add(node.image);
        });
        return classNames;
    };
    return getAllNames(rootNode);
};
const javaLanguageHandler = (selectedCode) => {
    // Parse the selected Java code
    const parsedCode = (0, java_parser_1.parse)(selectedCode);
    // Traverse the AST and rename identifiers
    return (0, utils_1.replaceIdentifiers)(getIdentifiers(parsedCode), selectedCode);
};
exports.javaLanguageHandler = javaLanguageHandler;
//# sourceMappingURL=java.js.map