# WtsUi

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Updates

### 7/3/2017

`ng serve` ran into the issue described in [Angular CLI App doesn't run after CLI update](https://github.com/angular/angular-cli/issues/4679)

On my CSRA Windows 7 Dell laptop, I followed the directions provided at the above ticket URL:

```
rmdir /S node_modules
npm install --save-dev @angular/cli@latest
```

I removed the line '"angular-cli": "1.0.0-beta.26",' from package.json (As instructed), then ran:

```
npm install
ng serve
```

The 'ng serve' indicated that I had to perform the following migration in angular-cli.json:

Replace:

```
"environments": {
        "source": "environments/environment.ts",
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
```

With:

```
"environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
```


