# Errors
## Prop className did not match server
Fixed by https://github.com/vercel/next.js/issues/7322

Install babel-plugin-styled-components

`npm i -D babel-plugin-styled-components`

Create a .babelrc file with the following

```json
{
    "env": {
      "development": {
        "plugins": [
          [
            "babel-plugin-styled-components",
            { "ssr": true, "displayName": true, "preprocess": false }
          ]
        ],
        "presets": ["next/babel"]
      },
      "production": {
        "plugins": [
          [
            "babel-plugin-styled-components",
            { "ssr": true, "displayName": true, "preprocess": false }
          ]
        ],
        "presets": ["next/babel"]
      }
    },
    "plugins": [
      [
        "babel-plugin-styled-components",
        { "ssr": true, "displayName": true, "preprocess": false }
      ]
    ]
}
```
