# MeeOpp App

## File Structure

```
meeopp/
  |--client/                                  //-- All the client side work (React,Redux)
  |  |--public/                               //-- The public folder contains the HTML file
  |  |--mocks/                                //-- All the jest setup
  |  |--tests/                                //-- All the test cases files
  |  |--src/                                  //-- Wrapper for app components
  |     |--assets/                            //-- Controller related to users
  |     |--redux/                             //-- All redux work of app
  |     |--routes/                            //-- Routing of app using BrowserRouter
  |     |--services/                          //-- Server side processing
  |     |--views/                             //-- Application logic (all the components)
  |     |--App.css                            //-- Css work
  |     |--index.js                           //-- Initialization of app
  |
  |--server/                                  //-- All the server side work
  |  |--common/                               //-- All the common functions(utility functions)
  |  |--controllers/                          //-- All the application controllers
  |  |--database/                             //-- Database configuration for MeeOpp App
  |  |--models/                               //-- All the application models
  |  |--routes/                               //-- All the application routes
  |  |--server.js/                            //-- Main server JS file (Entry point)
```

## Install application dependencies

For server side

```
$ cd Project_Folder/
$ npm install
```

For client side

```
$ cd Project_Folder/
$ cd client
$ npm install
```

## Build

Run the Client side (React app).

```
$ cd Project_Folder/
$ cd client
$ npm start
```

Run the App server.

```
$ cd Project_Folder/
$ cd server
$ nodemon server.js
```

## Development Pipeline

![](http://i.imgur.com/KcTpwjI.jpg)

For each feature/task, create a new branch as follows:

1. Sync from `development` branch.
2. Create a new branch from `development` with the pattern: `year/userName/feature`

For example: `2018/Kapil/implementedRedux`

3. Make changes (**Please commit frequently whenever a change has been made. do not commit everything at once!**)
4. Commit frequently to `year/userName/feature`.
5. When a new task is completed or a significant milestone is reached, create a Pull Request (PR) to `development`.
6. Reviewers will review your Pull Request and accept or reject with feedback.
7. If rejected, review and fix and create another Pull Request.
8. If accepted, your changes will be merged into the `development` branch.

## Linting

Linting keeps our code to a certain standard. We are following the standard Airbnb ES6 styling.

Understand what linting is and how to install it [here](https://medium.com/innow8/react-react-native-configure-eslint-airbnb-prettier-and-precommit-with-husky-in-one-go-for-code-e89363e5f17f).

Linting in mandatory and must be integrated as part of your work flow. All pull requests will be rejected if they are not linted.

## Assistance and questions

If you have any questions or need any assistance with anything, please ask on the slack channel or sent us an email.
Email[here](contact@innow8apps.com)
Please do not waste many hours stuck on a single problem. If you are stuck, please ask others for help.
