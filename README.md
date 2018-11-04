# A hackathon project for MoodyHack 2018, UT's first journalism hackathon!

Problem: Voters often listen to just their favorite news source for election information.   
Goal: To efficiently inform voters through a comprehensive yet simple approach.  
Solution: Create a familiar platform with focus on political news - Rotten Tomatoes for politics

### How it works
A candidate with high positive reviews will be "swimming" (indicated by a life preserver icon), otherwise, they will be "sinking" (indicated by an anchor image).

Reviews come from both verified journalist and anonyous users and their scores for a certain candidate are calculated sperately.

### What it's made of
React.js
Heroku + Parse

Most of this project was made with React.js for the front-end. The back-end is provided through a custom NoSQL backend using Parse installed to Heroku. There is the ability to log-in as well as pull data on an existing candidate. 


### Demo:
![](https://github.com/willthexu/moodyhack2018/blob/master/demo.gif)

### Requirements:
need `Node.js` installed and access to `npm`

### Setup instructions:  
1. Clone this repo:  
`git clone https://github.com/willthexu/moodyhack2018.git`
2. Install dependencies:  
`npm install`

### Run instructions:  
1. Start localhost server:  
`npm start`  
2. Visit localhost address (you should be automatically redirected to localhost when running `npm start`:  
localhost address should be: `http://localhost:3000`


## Default useful stuff. Don't need to read guys.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
