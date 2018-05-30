# Portfolio Project (Udacity Nanodegree)

This is my portfolio project. I have combined all projects learned at Udacity.

## Getting Started
I am using Gulptask runner to compile scss and launch the application locally.
Grunt task and ImageMagick tool is used to create responsive images.

## Learn About Folder Structure
```
Note : The folder structure may changes i.e we may include/exclude some folders/files
as project progresses but the overall sructure will remain as presented below:
```
* index.html -- Project main file
* css
  - styles.css   -- CSS for our project
* img  		-- Optimized images for project (obtained using grunt & image magick).
* scss
  - styles.scss -- CSS preprocessor

* gulpfile.js  -- This is a task runner to launch app and monitor for file(html,scss,css,js) changes.
* Gruntfile.js -- It is used to create optimized images using grunt & image magick.
* package.json -- Project dev dependencies (for Grunt and Gulp)

<br />[Getting started with Grunt](https://gruntjs.com/getting-started)
[What is gulp?](https://gulpjs.com/)


## Prerequisites
* HTML5, CSS3

## How to launch the app locally?

### Installation
* Step1 -- Install the npm modules from the package.json
```
>>> npm install
this command installs all the node related packages required to run the app locally in
/node_modules folder. You can see this folder inside /FEND_portfolio folder after running npm install
```

* Step2 -- Launch the application using below command:
```
Below command will run gulpfile.js and start the static project locally
>>> npm install -g gulp
>>> gulp
The application will be running at http://localhost:3000 URL
```


## Authors
* **Gaurav Singh**

## Acknowledgments
* **Special thanks to Udacity Team**
