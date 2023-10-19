import { CstChildrenDictionary, CstNode, parse } from 'java-parser';
import { replaceIdentifiers } from '../utils/utils';

const getIdentifiers = (rootNode: CstNode): Set<string> => {

    const traverseCst = (node: any, visitor: any) => {
        const nodeChildren: CstChildrenDictionary = node.children;

        if (!!node.children) {
            const nodeChildrenList = Object.entries(nodeChildren);
            nodeChildrenList.forEach((child) => {
                const nextArray = child[1];
                nextArray.length > 0 && traverseCst(child[1][0], visitor);
            });
        } else {
            visitor(node);
        }
    };
    
    // A utility function to print the class names
    const getAllNames = (cst: any) => {
        const classNames: Set<string> = new Set<string>([]);
        traverseCst(cst, (node: any) => {
            !!node.image 
                && node.tokenType.name === 'Identifier' 
                && classNames.add(node.image);
        });
        return classNames;
    };

    return getAllNames(rootNode);
};

export const javaLanguageHandler = (selectedCode: string): string => {
    // Parse the selected Java code
    const parsedCode = parse(selectedCode);

    // Traverse the AST and rename identifiers
    return replaceIdentifiers(getIdentifiers(parsedCode), selectedCode);
};