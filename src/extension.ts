import * as vscode from 'vscode';
import { javaLanguageHandler } from './langs/java';

const main = (selectedLanguage: string) => {
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
            const renamedCode = javaLanguageHandler(selectedCode);

            // Place the modified code on clipboard
            vscode.env.clipboard.writeText(renamedCode);

            vscode.window.showInformationMessage('Encoded code creted and copied successfully.');
        } catch (error) {
            vscode.window.showErrorMessage('Error parsing selected Java code');
        }
    } else {
        vscode.window.showErrorMessage('No active text editor.');
    }
};

// This method is called when your extension is activated
export const activate = (context: vscode.ExtensionContext) => {
    console.log('Clipboard Extension is active.');
    
    const disposable = vscode.commands.registerCommand('cider.replaceCode', () => {
        const options = [
            { label: 'Java', description: 'For Java code/' },
            { label: 'Python', description: 'For Python code.' }
        ];

        vscode.window.showQuickPick(options).then((selectedOption) => {
            if (selectedOption) {
                vscode.window.showInformationMessage(`You selected: ${selectedOption.label}`);
                main(selectedOption.label);
            }
        });
    });

    context.subscriptions.push(disposable);
};

// This method is called when your extension is deactivated
export const deactivate = () => {
    console.log('Clipboard Extension is active.');
};
