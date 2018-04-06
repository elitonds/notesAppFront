// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBl8ykctYXj95pp4j40vIUvesfPZfGSDfk",
    authDomain: "notes-app-36ccf.firebaseapp.com",
    databaseURL: "https://notes-app-36ccf.firebaseio.com",
    projectId: "notes-app-36ccf",
    storageBucket: "",
    messagingSenderId: "109434177944"
  }
};
