"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceIdentifiers = void 0;
const generateRandomString = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numeric = '0123456789';
    // Randomly choose the first character from the alphabet
    const firstChar = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    // Generate the remaining 7 characters as a combination of alphanumeric characters
    let randomString = firstChar;
    for (let i = 1; i < 8; i++) {
        const characters = i % 2 === 0 ? alphabet : numeric;
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
};
const isFirstLetterUppercase = (inputString) => {
    if (inputString.length === 0) {
        // If the string is empty, it doesn't have an uppercase first letter.
        return false;
    }
    // Get the first character of the string and its uppercase version
    const firstChar = inputString.charAt(0);
    const firstCharUppercase = firstChar.toUpperCase();
    // Compare the original first character with its uppercase version
    return firstChar === firstCharUppercase;
};
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
const smallFirstLetter = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
};
const replaceIdentifiers = (identifiers, text) => {
    var textCopy = text;
    for (const i of identifiers) {
        var replacement = generateRandomString();
        if (isFirstLetterUppercase(i)) {
            replacement = capitalizeFirstLetter(replacement);
        }
        else {
            replacement = smallFirstLetter(replacement);
        }
        // Create a regular expression with the global flag to match all occurrences of 'search'
        const regex = new RegExp(i, 'g');
        // Use the replace() method with the regex to replace all occurrences
        textCopy = textCopy.replace(regex, replacement);
    }
    ;
    return textCopy;
};
exports.replaceIdentifiers = replaceIdentifiers;
//# sourceMappingURL=utils.js.map