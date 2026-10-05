export const ThrowForeignKeysError = ({ foreignKeys, modulePath }) => {
    return `Invalid exports found in module "${modulePath}".

Only the following exports are allowed:
- UIComponent → Defines the UI design and rendering logic.
- Schema → Defines the structure, fields, and behavior of the UIComponent.

Remove unsupported exports:
${foreignKeys.map((key) => `- ${key}`).join("\n")}
`;
};
export const ThrowMissingKeysError = ({ missingKey, modulePath }) => {
    return `Invalid module "${modulePath}".

The module must export a "${missingKey}".

Allowed exports:
- UIComponent → Defines the UI design and rendering logic.
- Schema → Defines the structure, fields, and behavior of the UIComponent.

Example:
export const UIComponent = ...
export const Schema = ...
`;
};
