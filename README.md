# Cider - A Code Hider

Keep your secrets safe from AI tools! Hide your code from today! 

## Features

This extension confiscate critical code so that it can be used with AI tools such as chatGPT.

Actual code:

![Alt text](./imgs/before.png?raw=true "Title")

Encoded code:

![Alt text](./imgs/hiden.png?raw=true "Title")

## How to install:

1. You should have VSCode installed.
2. Simply download the `.vsix` file in `extension` folder.
3. Open VSCode and install from vsix.

## How to use:

1. Open any code (for now just Java) file.
2. Selec the piece of code.
3. CMD + SHIFT + P and then search for "Replace code".
4. The new code will be copied to the clipboard.

## Release Notes

### 0.0.1

Only Java language support. Will be adding more languages in later releases

---

## Development Guide

For development follow VSCode guidelines [here](https://code.visualstudio.com/api)
