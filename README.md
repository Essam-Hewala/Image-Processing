# Image-Processing
Task 1 For EGFWD (Image Processing)
Dependencies used:
1. Express: To create endpoints.
2. Sharp: to Image resizing.
3. Joi: to validate inputs
4. Jasmine: for unit testing

This application is capable of resizing images from images/real folder, and cache It to images/resize.

Application scripts:
"npm build": will build  to .js format.
"npm test": will test the application using jasmine
"npm lint": used for linting .ts code.
"npm prettier": used to apply prettier to .ts code.
Endpoints:
[GET] http://localhost:3000/img?name=imageNameWithoutExtension&height=720&width=720
    "name": Image Name (String),
    "height": Image Height (Int),
    "width": Image Width (Int)