import * as vscode from 'vscode';
import { extensionInitializer } from './cider/cider';


// This method is called when your extension is activated
export const activate = (context: vscode.ExtensionContext) => {
    console.log('Clipboard Extension is active.');
    
    const disposable = vscode.commands.registerCommand('cider.replaceCode', () => {
        extensionInitializer();
    });

    context.subscriptions.push(disposable);
};

// This method is called when your extension is deactivated
export const deactivate = () => {
    console.log('Clipboard Extension is active.');
};
