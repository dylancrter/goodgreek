# UGAHacks9 Project: GoodGreek

## Team Members
- Grant Moore
- Ryan Tomczyk
- John Medlock
- Dylan Carter

## Purpose
Web App for UGA fraternities/sororities to post their philanthropy events.

## How to Run the Application

To run the GoodGreek application, follow these steps:

### Prerequisites
- Java JDK 11 or later
- Maven 3.6.3 or later
- Node.js and npm (for the frontend)

### Backend Setup
1. Clone the repository to your local machine:
   ```
   git clone https://github.com/dylancrter/goodgreek.git
   ```
2. Navigate to the project's backend directory:
   ```
   cd goodgreek/backend
   ```
3. Run the Spring Boot application using Maven:
   ```
   mvn spring-boot:run
   ```

The backend application will start and be accessible at `http://localhost:8080`. Ensure that port 8080 is available or configure a different port in `src/main/resources/application.properties` if needed.

### Frontend Setup
1. Open a new terminal and navigate to the project's frontend directory:
   ```
   cd goodgreek/frontend
   ```
2. Install the necessary npm packages:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

The frontend application will start and open in your default web browser, typically at `http://localhost:3000`.

### Using the Application
Once both the backend and frontend are running, you can use the GoodGreek web application to browse, create, and manage philanthropy events. Ensure you're connected to the internet and that your backend API is correctly configured to communicate with the frontend.

## Technology Stack
- **Frontend**: React.js, React Router, Axios for API calls, Bootstrap for styling
- **Backend**: Spring Boot, Spring Data JPA, Maven for dependency management, MySQL for the database

## License
This project is open-source and available under the MIT License.

## Acknowledgments
- Special thanks to the UGAHacks9 organizers and mentors.
- Shoutout to all the participants for creating an inspiring hacking environment.