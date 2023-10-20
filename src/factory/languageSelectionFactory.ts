import { javaLanguageHandler } from "../langs/java";

const laguageHandlerFactory: LanguageHandlerFactory = {
    "java": javaLanguageHandler,
};

export const selectLanguageHandler = (selectedLanguage: string): LanguageHandler => {
    return laguageHandlerFactory[selectedLanguage];
};