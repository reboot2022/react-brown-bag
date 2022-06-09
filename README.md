# React 101
By Rafee Jenkins

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Use the snippets from the code!
I have added comments to the code to make it easier to understand. You can always send me a message on Teams if you need an explanaition.

## File + folder explanaition
### `firebase.js`
[Here](https://github.com/reboot2022/react-brown-bag/blob/main/src/Util).

### `app.yaml`
This file is required by GCP App Engine so the service knows which files to serve. This file is valid for this project. You may have to do some [reading](https://cloud.google.com/appengine).

The file lets App Engine know to use a Node.js runtime, and which files are static (images, index.html).

### `.gcloudignore`
The GCP version of a `.gitignore`. We use this to ensure that the only files that are deployed are the ones that were built by `npm run build` - AKA only files in the `/build` directory.

If you cannot see `/build`, then run `npm run build`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

If you are using this as a base app for the Reboot Hack - you should run this command in CloudShell in your GCP project.

BUILD BEFORE YOU DEPLOY: `npm run build && gcloud app deploy`