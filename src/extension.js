"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const cider_1 = require("./cider/cider");
// This method is called when your extension is activated
const activate = (context) => {
    console.log('Clipboard Extension is active.');
    const disposable = vscode.commands.registerCommand('cider.replaceCode', () => {
        (0, cider_1.extensionInitializer)();
    });
    context.subscriptions.push(disposable);
};
exports.activate = activate;
// This method is called when your extension is deactivated
const deactivate = () => {
    console.log('Clipboard Extension is active.');
};
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map