# Movie Database

simple REST API  - a basic movie database interacting with external API. 

## How to get started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Simplicity is one of  core principles. So, getting started with this project is something really easy and quick. Node.js and npm are essential to Angular development.

Get it now if it's not already installed on your machine.
Verify that you are running at least node v4.x.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors.

I recommend nvm for managing multiple versions of node and npm.
```
git clone https://github.com/gruby-murzyn/movies-database
```

### Installing

A step by step series of examples that tell you how to get a development env running

Please follow the following steps to get started.

```
Install nodej by from this link: https://nodejs.org/en/download/
```
```
Install NPM  if you installed nodejs dont worry you have npm with it for all operating system
```

## Create a new project 
Clone this repo into new project folder (e.g., my-proj).
```
git clone https://github.com/gruby-murzyn/movies-database.git my-proj
cd my-proj
```
End with an example of getting some data out of the system or using it for a little demo
## Delete non-essential files (optional)
You can quickly delete the non-essential files that concern testing and movie-database repository maintenance (including all git-related artifacts such as the .git folder and .gitignore!) by entering the following commands while in the project folder:

OS/X (bash)
```
xargs rm -rf < non-essential-files.osx.txt
rm src/app/*.spec*.ts
rm non-essential-files.osx.txt
```
Windows
```
for /f %i in (non-essential-files.txt) do del %i /F /S /Q
rd .git /s /q
rd e2e /s /q
```

## Install npm packages
See npm and nvm version notes above

Install the npm packages described in the package.json and verify that it works:

```
npm install
npm start
or ng serve
````
The npm start command first compiles the application, then simultaneously re-compiles and runs the lite-server. Both the compiler and the server watch for file changes.
Shut it down manually with 
``
Ctrl-C.
``

if you followe all step up to you, the app should run smoothly

## npm scripts
We've captured many of the most useful commands in npm scripts defined in the package.json:
```
npm start - runs the compiler and a server at the same time, both in "watch mode".
```
```
npm run build - runs the TypeScript compiler once.
```
```
npm run build:w - runs the TypeScript compiler in watch mode; the process keeps running, awaiting
```
changes to TypeScript files and re-compiling when it sees them.
```
npm run serve - runs the lite-server, a light-weight, static file server, written and maintained by 
```

## Here are the test related scripts:
```
npm test - compiles, runs and watches the karma unit tests
```
```
npm run e2e - compiles and run protractor e2e tests, written in Typescript (*e2e-spec.ts)
```
## Running the tests
```
This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time. We recommend that you shut down one before starting another.

Unit Tests
TypeScript unit-tests are usually in the src/app folder. Their filenames must end in .spec.ts.

Look for the example src/app/app.component.spec.ts. Add more .spec.ts files as you wish; we configured karma to find them.

Run it with npm test

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner. Both the compiler and the karma watch for (different) file changes.

Shut it down manually with Ctrl-C.

Test-runner output appears in the terminal window. We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests. Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (Ctrl-C) and restart it. No worries; it's pretty quick.

End-to-end (E2E) Tests
E2E tests are in the e2e directory, side by side with the src folder. Their filenames must end in .e2e-spec.ts.

Look for the example e2e/app.e2e-spec.ts. Add more .e2e-spec.js files as you wish (although one usually suffices for small projects); we configured Protractor to find them.

Thereafter, run them with npm run e2e.

That command first compiles, then simultaneously starts the lite-server at localhost:8080 and launches Protractor.

The pass/fail test results appear at the bottom of the terminal window. A custom reporter (see protractor.config.js) generates a ./_test-output/protractor-results.txt file which is easier to read; this file is excluded from source control.

Shut it down manually with Ctrl-C.
Explain how to run the automated tests for this system

```
### And coding style tests
The project uses sass for styling

## Project Methodology
The project uses both normal and BEM methodology for some one to be able to differentiate normal methodology and BEM

## Deployment
``
Simplest deployment possible
For the simplest deployment, build for development and copy the output directory to a web server.

Start with the development build

content_copy
ng build
Copy everything within the output folder (dist/ by default) to a folder on the server.
If you copy the files into a server sub-folder, append the build flag, --base-href and set the <base href> appropriately.


For example, if the index.html is on the server at /my/app/index.html, set the base href to <base href="/my/app/"> like this.

content_copy
ng build --base-href=/my/app/
You'll see that the <base href> is set properly in the generated dist/index.html.

If you copy to the server's root directory, omit this step and leave the <base href> alone.

Learn more about the role of <base href> below.

Configure the server to redirect requests for missing files to index.html. Learn more about server-side redirects below.
This is not a production deployment. It's not optimized and it won't be fast for users. It might be good enough for sharing your progress and ideas internally with managers, teammates, and other stakeholders

``
## Database 
for demonsttration purpose I used MLAB database system [MongodDB Based System]
```
Login: makumba
Pass:  makumba404
```

## Built With

* [Angular Framework](https://angular.io/) - The web framework used
* [Nodejs](https://nodejs.org/en/) - JavaScript  run-time environment. 
* [Express](https://expressjs.com/) - web framework for Node.js 
* [MongoDb](https://www.mongodb.com/) - NoSQL database program,
* [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript, ,


Note : I choosed to use those frameworks and language due to my level of understand for bulding full stak app 

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Geofrey Zellah* 


## License

This project is licensed under the MIT License 


