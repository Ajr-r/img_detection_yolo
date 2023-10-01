# Image Detection by YOLO - webapp [Desktop]

## Overview
This is a desktop application designed for object identification in images. It utilizes a combination of technologies, including Express, React, Python, and YOLO (You Only Look Once) for machine learning. users can easily upload images, and the application will identify and label objects within the images, providing information about the identified objects.

file:///home/arjith/pics/ai_rec.png


## Features
- Object detection in images.
- User-friendly interface built with React.
- Backend powered by Express.
- Machine learning object detection using YOLO.
- Support for a variety of image formats.

## Technology Stack
- **Frontend**: React
- **Backend**: Express.js
- **Machine Learning**: YOLO (You Only Look Once)
- **Server-Side Scripting**: Python

## How it Works
1. The user uploads an image through the application's interface.
2. The image is sent to the server built with Express.js.
3. The server processes the image using the YOLO machine learning model for object detection.
4. The identified objects are labeled and annotated.
5. The annotated image is sent back to the user, displaying the identified objects.

## Getting Started
To run locally, follow these steps:
1. Prerequsites :- Python3, nodejs, yolo. 
2. Clone the repository to your local machine.
3. Navigate to the project directory.
4. Install the necessary dependencies for the backend using 'npm i' inside /webui/be .
5. Start the Express server using 'node --watch app.js' inside /webui/be, the webui will be available at loacalhost:3000.
6. To modify the frontend navigate to /webui/fe.

## Project Structure
- `webui/fe`: Contains the React frontend code.
- `webui/be`: Includes the Express.js backend code as well ML code named ml.py.
- `/`: the root directory contains the code for ML, also available in .ipynb


