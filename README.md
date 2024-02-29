# Node.js Application for PVT Data Processing

## Overview

This application is designed to receive and process Position, Velocity, and Time (PVT) data packets from IoT devices, validate the incoming data, and perform necessary actions based on the extracted information. The application is built with Node.js and Express, and it's configured for production deployment using PM2, a powerful process manager for Node.js applications.

## Features

- **PVT Data Submission Endpoint**: A REST API endpoint that accepts PVT data packets, validates them, and logs the extracted information.
- **Data Validation**: Validates the format and completeness of incoming PVT data packets.
- **PM2 Integration**: Utilizes PM2 for process management, ensuring the application remains active and is automatically restarted in case of failure.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 12.x or higher recommended)
- npm (comes with Node.js)
- PM2 (Install globally using `npm install pm2 -g`)

## Installation

1. **Clone the Repository**

```
git clone https://github.com/albe68/node-gps-assessment.git
cd node-gps-assessment
```

2. **Install Dependencies**

```
npm install
```

3. **Set Environment Variables**

Copy `.env.example` to a new file named `.env` and fill in your environment variables as needed.

4. **Start the Application with PM2**

```
pm2 start ecosystem.config.js

```

Or, for development:

```
npm run dev

```

## API Usage

### Submit PVT Data

- **URL**: `/api/v1/pvt-data/submit`
- **Method**: `POST`
- **Data Constraints**:

```
{
"PVTPacketData": "string containing PVT data in the specified format"
}
```

- **Success Response**:

- **Code**: `201 CREATED`
- **Content**:

  ```
  {
    "message": "Data received successfully!"
  }
  ```

- **Error Response**:

- **Code**: `400 BAD REQUEST`
- **Content**:

  ```
  {
    "error": "Data retrieval failed"
  }
  ```

## Project Structure

- `src/`: Source code directory.
- `src/index.js`: Main application file.
- `src/controller/`: Contains controller files (e.g., PVTDataController.js for handling PVT data processing logic).
- `src/decodePacketHelper.js`: Contains Helper functions for PVTDataController.js
- `.env`: Environment variable file.
- `ecosystem.config.js`: PM2 configuration file.
- `package.json`: Defines the project dependencies and scripts.
