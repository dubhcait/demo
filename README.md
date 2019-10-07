# Experimenting with Netlify Functions 

used the NASA  Astronomy Picture of the Day.

Live at: https://serene-wright-074691.netlify.com/


![](https://i.imgur.com/tRZTS9y.png)

Based on Create React App, Create React App Lambda integrates Netlify Lambda CLI functionality into a basic app I use as a reference or starting point.

## Enviroment 
- install netlify cli with `npm install -g netlify-cli`
- install yarn
- run `netlify login` and login with an account that has access to the netlify site

once this is done
add a .env file with API key 
you can run the project locally with `netlify dev`


## building this project 
1 started with create-react-app

2 created src/lambda file for storing serverless function files

3 To run netlify functions I need them to be compiled first so I set up the package json to do this with netlify-lambda as part of the build command


![](https://i.imgur.com/Xu9uIVG.png)



4 added a a netlify.toml file to specify the functions folder (that is created after compiling), as well as a combined app+functions build command for instant deployment to Netlify


built-in proxy redirect from /.netlify/functions/* to your local functions server, meaning in-app serverless function calls will work locally exactly as they do on Netlify
