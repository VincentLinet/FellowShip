## Table of Contents

[Project Structure](#project-structure)

&nbsp;&nbsp;&nbsp;[Routes](#routes)

&nbsp;&nbsp;&nbsp;[Schemas](#schemas)

&nbsp;&nbsp;&nbsp;[Controllers](#controllers)

&nbsp;&nbsp;&nbsp;[Models](#models)

&nbsp;&nbsp;&nbsp;[Services](#services)

&nbsp;&nbsp;&nbsp;[Miscellaneous Files](#miscellaneous-files)

[Use](#use)

[API Routes](#api-routes)

## Project Structure

### Routes

Here should be placed every api route for each entity toward the app.
Routes should be declared as such:

`router.[method]("/[route]", [opt:]validate([schema]), [control]);`

_method_ is the http method. Ex: post, get, ...
_route_ is a string. Ex: "/", "/user".
_validate_ is optional, checks should be used only when params or body are expected.
_schema_ is the expected joi schema for the params or body.
_control_ is the expected behaviour when the api is called.

Notice that no data treatment should happen in any route declaration.

### Schemas

Here should be placed every expected data pattern for each route.
For mor information about joi, the data validator, see [their documentation](https://hapi.dev/family/joi/)

### Controllers

Here should be placed each and every function that treats the data, either incoming or sent.
Remember to declare _req_, _res_ and _next_ parameters if the controller is called directly from any route.
_req_ is where the incoming data is stored.
_res_ allows to send responses.
_next_ allows to end the function.

### Models

Here should be placed every function calling upon data from any database.
A _sql_ class allows to use a query like such:

`sql[query].[task]()`

_query_ is a string containing one query.
_task_ is a function describing how the query has to be treated.
`execute()` gets every entries as RawData.
`single()` gets the first result.

Notice that no data treatment should happen in any model.

### Services

Here should be placed every function having no direct affinity with data and functions that need mutualization.

### Miscellaneous Files

These files intervene in the automatisation of the deployment.

#### Bootstrap

This function executes the app.

#### Ecosystem

This file describes the tasks expected when the app is deployed.

#### Webpack Config

This function is executed when the app is deployed in production mode, minifying the code and placing it in a separate directory.

## Use

### Development

#### Requirements

_nodemon_ and _yarn_ must be installed globally.
You need to add NODE_ENV="development" in your environment.

#### Launching

Upgrade your packages with `yarn` command
Launch the app with `yarn dev`

#### Database

The app in development environment is configured to hit on the port 3306 of the localhost.
The default user is _root_ and the password is empty. The base is fellowship and you can get it from the _sql_ directory.

### Production

#### Requirements

_pm2_ must be installed globally

#### Deployment

Use `pm2 deploy [environment]` where _environment_ is either _integration_ or _production_

## API Routes

_To be continued..._
