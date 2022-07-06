I had a lot problem getting typescript to work with got even through got is written as ESM native in typescript.  The problem seems to be that got is ESM only.  It no longer works when an attempt is made to import it as a CommonJS module.  I think Typescript keeps trying to transpile to not use ESM modules. 

I'm running tsc version Version 4.7.4 as of this writing.

Note also that I've set "type" : "module" in package.json but 


I don't really care about the strict part but here is the tsconfig.json

```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Node 16 + ESM + Strictest",
  "compilerOptions": {
    "lib": [
      "es2021"
    ],
    "module": "es2022",
    "target": "es2021",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "allowUnusedLabels": false,
    "allowUnreachableCode": false,
    "exactOptionalPropertyTypes": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noPropertyAccessFromIndexSignature": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "importsNotUsedAsValues": "error",
    "checkJs": true
  }
}
```

