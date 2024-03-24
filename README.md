# Express CORS Middleware and Route Handling
This project demonstrates how to implement CORS (Cross-Origin Resource Sharing) middleware and handle routes using Express.js.

## Overview
CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. This project utilizes CORS middleware to handle cross-origin requests.

Additionally, the project showcases routing using Express.js's Router() and provides examples of route handling for various HTTP methods such as GET, POST, PUT, and OPTIONS.

## Features
1.CORS Middleware: Handles CORS requests by allowing specified HTTP methods and headers.
2.Route Handling: Utilizes Express Router() for organized route management.
3.Logging: Logs HTTP requests to the console, including method, path, and IP address.
4.Static File Serving: Serves static files from the 'public' and 'css' directories.
5.Dynamic Routing: Supports dynamic parameters in routes, e.g., '/:id/echo'.
6.Default Route: Provides a default route for handling invalid requests.
7.Setup and Usage
# Clone this repository to your local machine.
Install dependencies using npm install.
Run the application using node <filename.js> or npm start.
Access the application through the specified port (default: 3500).
Dependencies
Express: Fast, unopinionated, minimalist web framework for Node.js.
CORS: Cross-Origin Resource Sharing middleware for Express.js.
## Directory Structure
public: Contains static files accessible to clients.
css: CSS files for styling.
routes: Contains route handlers for different endpoints.
views: HTML templates for rendering.
Usage Examples
Access the homepage: GET /
Access a form page: GET /form
Echo a message: GET /:id/echo
Handle invalid routes: All Methods *

 