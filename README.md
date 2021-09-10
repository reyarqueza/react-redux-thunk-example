# React Redux Thunk Example

This is an example of using React with Redux, and
[redux-thunk](https://github.com/reduxjs/redux-thunk).

With [redux-thunk](https://github.com/reduxjs/redux-thunk), you no longer need to write your own
Middleware and call next() to move the flow forward from your middleware codebase to the reducer.
Instead, you write **Async Actions** which returns a thunked function instead of the usual action
object. Within your Async Action, you can dispatch any asynchromous functions.
[redux-thunk](https://github.com/reduxjs/redux-thunk) is your middleware which adds this
functionality.

Follow the directions below to run this example locally:

Git Clone this example:

```
git clone https://github.com/reyarqueza/react-redux-thunk-example.git
```

Change directories

```
cd react-redux-thunk-example
```

Install dependencies (takes about 1 minute)

```
npm install
```

### Production

Build the app:

```
npm run build
```

Wait for the build to finish, then start the local server:

```
npm start
```

The file /public/js/bundle.js will be overwritten and minfied in production mode (with source maps
as a separate file). There will be no watch mode, and the build process will exit after completion.

### Development

1. Start the local server:

```
npm start
```

2. Open the browser at the url specified in the terminal.

3. Open another terminal and run the following to start developing:

```
npm run dev
```

Add/edit React files in the src folder. After saving, your files are built automaticallty. The file
/public/js/bundle.js will be created in development mode (including source maps). Refresh the
browser window.
