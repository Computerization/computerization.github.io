module.exports = {
  root: true,
  settings: {
    "import/resolver": {
      // resolves the .tsx / .ts imports
      node: {
        extensions: [".js", ".json", ".mjs", ".ts", ".tsx"],
      },
    },
  },
  extends: ["jc"],
  rules: {
    "import/no-unresolved": [
      "error",
      {
        // built-in imports in Docusaurus v2
        ignore: ["^@theme", "^@docusaurus", "^@site"],
      },
    ],
  },
  overrides: [
    {
      files: ["*.d.ts"],
      rules: {
        "@typescript-eslint/no-duplicate-imports": "off",
        "import/no-duplicates": "off",
      },
    },
  ],
};
