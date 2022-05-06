# Image-Processing-API

This project is a part of Udacity-FWD-Advanced web development track.

# Project Setup

npm install

# Problem definition

Building an API with scalable and maintainable code that can be used in two different ways :
1. Placeholder API :  place images with the size set via URL parameters.
2. Image Scaling Library (sharp): serve properly scaled versions of images to reduce page load size.

# Development with:
* TypeScript
* Prettier (Formating)
* EsLinter (Linting)
* Jasmine (Unit Testing) 
* Sharp (Image processing)
* Express (Building the server)

# File Structure (src):
* assets: images and any styling files
* middlewares: middlewares functionalities
* routes: writing routes and organizing EndPoints
* tests : building unit testing with jasmine (it is written in the same style of file structure of src directory)
* utilities: any helper functions.
* index.ts : main file where the server is  built

# Scripts:
* npm run prettier 
* npm run lint
* npm run build >> transpiling files to javascript to be ready for production
* npm run test >>  for unit testing
* npm run start >> start server

# Endpoints:
* **/api/processimg**

* It accepts the following query parameters:

1. **name** >> img file name
2. **width** >> required width
3. **height** >> required height

* Examples: 
1. /api/processimg?name=fjord >> Placeholder API
2. /api/processimg?name=fjord&width=200&height=200 >> for Image Scaling

# Enterprise Level Application:

Processing hundreds of images with multiple thumbnail sizes for an eCommerce solution.
