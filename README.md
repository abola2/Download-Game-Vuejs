# Download-game

Have you ever visited a sketchy website in search of an obscure program? 


No?

Well we decided to recreate the experience anyways! 

## Authors

Abola / Aapo
https://github.com/abola2

Edzkimo / Eetu
https://github.com/edzkimo

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) 
With extensions for:
* Typescript
* Vue
* Playwright tests

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```


### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### faq:
Is there any practical use for this project? 
* NO! What did you expect?
