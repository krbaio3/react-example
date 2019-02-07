# ReactJS POC


<!-- TOC -->
- [ReactJS POC](#reactjs-poc)
- [Prerequisites](#prerequisites)
  - [Steps to build it](#steps-to-build-it)
<!-- /TOC -->


In this POC we setup the basic plumbing to "build" our project and launch it in a dev server.

You need to do `yarn` in command line to install the dependencies.

We setup an initial <abbr title="Node.js package manager, a package manager for the JavaScript runtime environment Node.js">npm</abbr> project, give support to TypeScript, and install React.<br />

Summary steps:

- Prerequisites: Install Node.js, Yarn.
- Initialize **[./package.json](./package.json)** (with `npm init`)
- Install:
    - Webpack and webpack-dev-server.
    - TypeScript.
    - Babel.
    - Bootstrap.
- Setup **[./webpack.config.js](./webpack.config.js)**
- Create a test TS file.
- Create a simple HTML file.

# Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v8.9.1) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 6.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Navigate to the folder where you are going to download project.

- Open the bash, and execute `yarn` (type `yarn` and `yarn install`, is same).

 ```bash
 yarn
 ```

- When the install, has finished, you write in bash `yarn start` to start the project. 

 ```bash
 yarn start
 ```

- The browser will open it, the browser will open with the App. It use the 4300 port, if you like to change the port, open `webpack.config.js` and change the propery `port: 4300,`.

<hr>

 - Revisar CSS/SCSS/PostCSS