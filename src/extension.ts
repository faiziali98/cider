import * as vscode from 'vscode';
import { javaLanguageHandler } from './langs/java';

// This method is called when your extension is activated
export const activate = (context: vscode.ExtensionContext) => {
    console.log('Clipboard Extension is active.');
    
    const disposable = vscode.commands.registerCommand('cider.replaceCode', async () => {
        console.log('Clipboard Extension is active wow.');
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

                    // Replace the selected code with the modified code
                    vscode.env.clipboard.writeText(renamedCode);

                    vscode.window.showInformationMessage('Encoded code creted and copied successfully.');
                } catch (error) {
                    vscode.window.showErrorMessage('Error parsing selected Java code');
                }
        } else {
            vscode.window.showErrorMessage('No active text editor.');
        }
    });

    context.subscriptions.push(disposable);
};

// This method is called when your extension is deactivated
export const deactivate = () => {
    console.log('Clipboard Extension is active.');
};
