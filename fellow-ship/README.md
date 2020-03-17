## Table of Contents

[Project Structure](#project-structure)

&nbsp;&nbsp;&nbsp;[Public](#public)

&nbsp;&nbsp;&nbsp;[Pages](#pages)

&nbsp;&nbsp;&nbsp;[Sources](#sources)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Components](#components)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Controllers](#controllers)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Services](#services)

&nbsp;&nbsp;&nbsp;[Styles](#styles)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Initial](#initial)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Page Styles](#page-styles)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Component Styles](#component-styles)

&nbsp;&nbsp;&nbsp;[Miscellaneous Files](#miscellaneous-files)

[Use](#use)

## Project Structure

### Public

Here should be placed every static asset the app will use client-side, like pictures and vectors.

### Pages

Pages are a specific NextJS component that build as an independant static page depending on the PageProps that are specified for it. Most of the time, the data displayed on a page has to be fetched inside the getInitialProps() function and given as parameter to the Page component. This is resulting in a fast way to fetch the data server-side while the static content is loader client-side. The data is not refetched even after a reload, until the user navigates again.
The `Page.getInitialProps()` function has to return an object that is injected as the component properties.

### Sources

Here should be places every dynamic and intelligence content.

#### Components

React doesn't come alone and its components are stored in only one place. Each time you need a feature to show on the app, create a component. The granularity is up to the developper, and sometimes it's better to have multiple components in only one file if this sub-components are not used anywhere else. However, don't build several massive components working with their own behaviour in one file.
There is an exception for the `Icons.js` file in with every SVG icons will be stored.

#### Controllers

Here should be placed each and every function that treats the data, either incoming or sent. The http requests will be handled by the [fetcher](https://github.com/VincentLinet/FellowShip/tree/master/fellow-ship/src/services/fetcher.js) that is built in the services, and it's recommanded to take a good look at this file before implmenting any controller.
A controller should look like such:
`export const [name] = ({ body, params }) => [method]("api/[route]", body, params);`

_name_ is obviously the name of the function and should contain the method and the target. Ex: getMasters, postUser
_method_ is the http method. Ex: post, get, ...
_route_ is a string. Ex: "/user"...

#### Services

Here should be placed every function having no direct affinity with data and functions that need mutualization. Ex: A `dates.js` file containing functions to display dates in different ways.

### Styles

Every css file has to be imported in `design.css` in order to load all the styles in a fixed sequence.

#### Initial

Here are stored the css files covering all the app.

#### Page Styles

Here are stored the css files covering the global behaviour of each standalone page.

#### Component Styles

Here are stored the css files covering the styles of specific components.

### Miscellaneous Files

These files intervene in the automatisation of the deployment.

#### Next Config

This is the config file for NextJS, used for now as a way to load the css from anywhere we want outside of the default NextJS `_app.js` file.

## Use

### Development

#### Requirements

_next_ and _yarn_ must be installed globally.
You need to add REACT-APP-ENV="development" in your environment.

#### Launching

Upgrade your packages with `yarn` command
Launch the app with `yarn dev`
Open any browser and navigate on http://localhost:3000/

#### Database

The app in development environment is configured to hit on the port 9000 of the localhost.

### Production

_No effective deployment solution yet._
