# React Webpack Build

## react-webpack-build is a minimum build system for React using webpack.

### Get Started

Git Clone this project:

```
git clone https://github.com/reyarqueza/react-webpack-build.git [your-project-directory]
```

Initialize git to your own repository. 

```
cd [your-project-directory]
rm README.md && rm -rf .git && git init
```

Update package.json file with your own name, version, description, and author.

```
npm init
```

Install dependencies (takes about 1 minute)

```
npm install
```

### Development
Start the local server:

```
npm start
```

Open the browser at the url specified in the terminal. Add/edit React files in the src folder. After saving, your files are built automaticallty. The file /public/js/bundle.js will be created in development mode (including source maps). Refresh the browser window.

### Production
Build the app:

```
npm run build
```

The file /public/js/bundle.js will be overwritten and minfied in production mode (with  source maps as a separate file).

### Why?
Most web developers are moving towards [Create React App](https://github.com/facebook/create-react-app), which is a full featured build system. 

However, you may want to roll your own build system. **react-webpack-build** is useful if you want to start off with a barebones webpack build system almost from the ground up. 

### The Future
On occassion, I will update package.json and make other necessary changes to this minimal build system to keep this up to date with the latest stable dependencies.