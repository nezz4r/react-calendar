<div style="font-size:20px">
  <h1>React Calendar</h1>
</div>

# About The Project

## Overview

This calendar app is made with React, Moment.js and styled with styled-components, for the Jobsity Coding Challenge.

It supports multiple custom reminders per day (of up to 30 characters), editing, deleting, and weather forecast.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Functionalities

### Multiple months

You can navigate through the months via the chevron button on the header or by clicking on a day that is not on the current month.

### Reminders

The reminders take a few fields, namely: title (up to 15 characters), description (up to 30 characters), a date, a time, a City (for weather forecast) and a color, and they will be displayed on the day they were added to, in the correct time order.

You can add a reminder by clicking on the "+" symbol on the day you wish to add it to, and then filling the form in the modal.

You can edit, view or delete your reminder by clicking directly on it.

You can also delete all the reminders for a specific day by clicking on the trash can button.

The reminders are also refresh-persistent because they are stored on localStorage.

<br/>

### Screenshots

<br/>

<img src="https://i.imgur.com/cMAcJyu.png" alt="Screenshot 1"
width="350"
height="200">

<img src="https://i.imgur.com/BFbkv1U.png" alt="Screenshot 1"
width="350"
height="200">

<img src="https://i.imgur.com/KdncbIa.png" alt="Screenshot 1"
width="350"
height="200">

# Setting Up

### Requirements

- Node 14.4.x or up
- Yarn (or npm)

 <br/>

### Installing the dependencies

```
$ yarn install
```

<br/>

## Available Scripts

In the project directory, you can run:

 <br/> 
 
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

 <br/>

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

 <br/>

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
