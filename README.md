# Backend for Real-Time Data

This project implements a Node.js server that processes real-time data emitted from a separate simulator project ([rtd-sim](https://github.com/Ajinkya213/rtd-sim)). It utilizes an event-based architecture for non-blocking communication and asynchronous data processing.

## Functionality

- **Data Stream Processing:** The server receives data streams from the rtd-sim project, likely containing simulated values with timestamps and speeds.
- **Database Integration:** The received data is saved to a MySQL database using Sequelize for object-relational mapping (ORM).
- **Client Communication:** The server broadcasts the processed data to connected React clients in real-time using Socket.IO, enabling a dynamic user experience.

### System Architecture

The backend leverages an event-based architecture to handle data processing and communication asynchronously:

1. **Data Emission:** The rtd-sim project emits data objects containing relevant information (e.g., timestamps, speeds).
2. **Data Reception:** This server receives these data objects through a mechanism (potentially defined in `rtd-sim`).
3. **Data Processing:** The received data is validated, manipulated, or formatted as needed before storage.
4. **Database Interaction:** The processed data is stored in a MySQL database using Sequelize for efficient data management.
5. **Real-Time Broadcasting:** The server broadcasts the processed data to connected React clients using Socket.IO, enabling real-time visualization or analysis.

### Packages Used

- **axios** (v1.7.2 or later): Used for making HTTP requests (potentially to the rtd-sim project).
- **cors** (v2.8.5 or later): Enables Cross-Origin Resource Sharing (CORS) for handling requests from different origins (if applicable).
- **eventemitter3** (v5.0.1 or later): Provides an event emitter library for handling asynchronous communication.
- **express** (v4.19.2 or later): Provides a web framework for building the server application.
- **mysql2** (v3.10.1 or later): Connects the server to a MySQL database.
- **sequelize** (v6.37.3 or later): Simplifies database interactions through an ORM.
- **socket.io** (v4.7.5 or later): Enables real-time, two-way communication between the server and React clients.

### MySQL Database

This project requires a MySQL database server set up externally. Ensure that the necessary access credentials are configured correctly in the server code.

## Setup

1. **Prerequisites:**
   - Node.js (version 12 or later) and npm (Node Package Manager) installed on your system. You can download them from [https://URL latest node .js ON Node.js nodejs.org].
   - A MySQL database server set up and accessible.
2. **Project Installation:**
   - Clone or download this repository to your local machine.
   - Navigate to the project directory in your terminal.
   - Install the required dependencies:

     ```
     npm install
     ```

## Configuration

- **Database Credentials:** Update the MySQL database connection information in the server code (`config.js` or similar) with your specific credentials (host, username, password, database name).
- **rtd-sim Connection:** If necessary, modify the code related to receiving data from the rtd-sim project to match its communication mechanism (e.g., API endpoint URL).
- **React Client Integration:** Integrate the Socket.IO client library into your React client application to establish a connection with this server and receive real-time data updates.

**Usage**

1. **Run the Server:**
   - Start the server by running the following command in your terminal:

     ```
     node --watch app.js
     ```

   - This will start the server on port 4000 by default.

2. **Connect React Client:**
   - Start your React client application and connect it to the server using Socket.IO, enabling it to receive real-time data updates.
