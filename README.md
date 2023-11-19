# vike-radix

Reproduction repository

## Usage

```
npm install
npm run web:dev
```

You will get the following error:

```
[vite][request(6)] Error when evaluating SSR module /pages/index/index.page.tsx: failed to import "@radix-ui/themes"
|- /home/user/git/vike-radix/node_modules/@radix-ui/themes/dist/esm/index.js:1
export { Theme, useThemeContext, updateThemeAppearanceClass } from './theme';
^^^^^^

SyntaxError: Unexpected token 'export'
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)
    at Module._compile (node:internal/modules/cjs/loader:1340:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Function.Module._load (node:internal/modules/cjs/loader:1023:12)
    at cjsLoader (node:internal/modules/esm/translators:345:17)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:294:7)
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at nodeImport (file:///home/user/git/vike-radix/node_modules/vite/dist/node/chunks/dep-T98iZFpD.js:48937:17)
    at ssrImport (file:///home/user/git/vike-radix/node_modules/vite/dist/node/chunks/dep-T98iZFpD.js:48838:24)
    at eval (/home/user/git/vike-radix/app/web/pages/index/index.page.tsx:4:31)
    at instantiateModule (file:///home/user/git/vike-radix/node_modules/vite/dist/node/chunks/dep-T98iZFpD.js:48900:9)
```

Workaround, modify and uncomment in `app/web/vite.config.ts`

```
  ssr: {
    noExternal: [/^@radix-ui/],
  },
```

Now styles load and library works but you get the warnings:

```
[vike][request(3)] HTTP request: /
Sourcemap for "/home/user/git/vike-radix/node_modules/@radix-ui/themes/dist/esm/index.js" points to missing source files
Sourcemap for "/home/user/git/vike-radix/node_modules/@radix-ui/themes/dist/esm/theme.js" points to missing source files
Sourcemap for "/home/user/git/vike-radix/node_modules/@radix-ui/themes/dist/esm/theme-options.js" points to missing source files
... this goes on a for pretty much every source file in radix-ui
```
