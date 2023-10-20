"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectLanguageHandler = void 0;
const java_1 = require("../langs/java");
const laguageHandlerFactory = {
    "java": java_1.javaLanguageHandler,
};
const selectLanguageHandler = (selectedLanguage) => {
    return laguageHandlerFactory[selectedLanguage];
};
exports.selectLanguageHandler = selectLanguageHandler;
//# sourceMappingURL=languageSelectionFactory.js.map