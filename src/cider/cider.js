"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extensionInitializer = void 0;
const vscode = require("vscode");
const languageSelectionFactory_1 = require("../factory/languageSelectionFactory");
const ciderMainLogic = (languageHandler) => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const selection = editor.selection;
        const selectedCode = editor.document.getText(selection);
        if (selectedCode.trim() === '') {
            vscode.window.showErrorMessage('No text selected.');
            return;
        }
        try {
            // Currently, we only have Java but can add more languages support
            const renamedCode = languageHandler(selectedCode);
            // Place the modified code on clipboard
            vscode.env.clipboard.writeText(renamedCode);
            vscode.window.showInformationMessage('Encoded code creted and copied successfully.');
        }
        catch (error) {
            vscode.window.showErrorMessage('Error parsing selected Java code');
        }
    }
    else {
        vscode.window.showErrorMessage('No active text editor.');
    }
};
const languageSelector = () => {
    const options = [
        { label: 'java', description: 'For Java code.' },
        { label: 'python', description: 'For Python code.' }
    ];
    vscode.window.showQuickPick(options).then((selectedOption) => {
        if (selectedOption) {
            vscode.window.showInformationMessage(`You selected: ${selectedOption.label}`);
            ciderMainLogic((0, languageSelectionFactory_1.selectLanguageHandler)(selectedOption.label));
        }
    });
};
const extensionInitializer = () => {
    languageSelector();
};
exports.extensionInitializer = extensionInitializer;
//# sourceMappingURL=cider.js.map