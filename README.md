# Image Detection by YOLO - webapp [Desktop]

## Overview
This is a desktop application designed for object identification in images. It utilizes a combination of technologies, including Express, React, Python, and YOLO (You Only Look Once) for machine learning. users can easily upload images, and the application will identify and label objects within the images, providing information about the identified objects.

![Sample Image](https://raw.githubusercontent.com/Ajr-r/img_detection_yolo/master/ai_rec.png?token=GHSAT0AAAAAACE4SCET2B3PSISGWYKKESH6ZIZKMDQ)



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
1. Prerequsites :- Python3, nodejs, yolo https://www.kaggle.com/datasets/valentynsichkar/yolo-coco-data.
3. Place the yolo-coco-data outside of the root directory since i could not upload it cause of its files size
3. Clone the repository to your local machine.
4. Navigate to the project directory.
5. Install the necessary dependencies for the backend using 'npm i' inside /webui/be .
6. Start the Express server using 'node --watch app.js' inside /webui/be, the webui will be available at loacalhost:3000.
7. To modify the frontend navigate to /webui/fe.

## Project Structure
- `webui/fe`: Contains the React frontend code.
- `webui/be`: Includes the Express.js backend code as well ML code named ml.py.
- `/`: the root directory contains the code for ML, also available in .ipynb


