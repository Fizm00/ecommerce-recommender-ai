# E-commerce Recommendation System

## (Under Development)

### Project Description

This project is a full-stack application that demonstrates the development of an AI-based product recommendation system for an e-commerce platform. The system uses the **Collaborative Filtering** method to analyze user behavior and provide personalized, relevant product recommendations.

The application is built using the **MERN Stack** (MongoDB, Express.js, React, Node.js) to showcase the seamless integration between an AI model and a modern web application.

---

### Key Features

- **Product Recommendations**: Displays a personalized list of product recommendations for each user.
- **Product Display**: A page to view detailed product information, pricing, and ratings.
- **User Interaction Tracking**: Logs user interactions such as ratings, clicks, or purchase history to train the recommendation model.
- **MERN Architecture**: Utilizes modern technologies for both the frontend (React + Vite) and backend (Node.js + Express.js).

---

### Technology Stack

- **Frontend**:

  - **React.js**: For building a dynamic and responsive user interface.
  - **Vite**: A fast and modern build tool.
  - **Tailwind CSS**: For rapid and efficient styling.
  - **Axios**: An HTTP client for communication with the backend.

- **Backend**:

  - **Node.js**: The JavaScript runtime environment.
  - **Express.js**: A web framework for building RESTful APIs.
  - **MongoDB**: A NoSQL database for storing user and product data.
  - **Mongoose**: An object modeling library for MongoDB.
  - **CORS & dotenv**: Middleware for essential configurations.

- **AI Model**:
  - **Python**: The primary programming language for the AI model.
  - **Scikit-learn / Surprise**: Libraries for implementing the Collaborative Filtering algorithm.

---

### System Requirements

Make sure you have the following software installed on your machine:

- Node.js (version 14.x or higher)
- npm
- MongoDB (local installation or MongoDB Atlas)
- Python (version 3.x)

---

### Installation and Running the Project

Follow these steps to get the project up and running locally:

1.  **Clone the Repository**

    ```bash
    git clone [https://github.com/your-username/your-project-name.git](https://github.com/your-username/your-project-name.git)
    cd your-project-name
    ```

2.  **Backend Setup**

    Navigate to the `server` directory and install all dependencies:

    ```bash
    cd server
    npm install
    ```

    Create a `.env` file inside the `server` folder and add your MongoDB database URI:

    ```
    MONGO_URI=mongodb://127.0.0.1:27017/your_database_name
    ```

    Start the backend server:

    ```bash
    npm run dev
    ```

3.  **Frontend Setup**

    Open a new terminal, navigate to the `client` directory, and install its dependencies:

    ```bash
    cd ../client
    npm install
    ```

    Start the frontend development server:

    ```bash
    npm run dev
    ```

    The application will now be running at `http://localhost:5173`.

---

### Contact

- **Name**: [Your Full Name]
- **GitHub**: [Link to your GitHub Profile]
- **LinkedIn**: [Link to your LinkedIn Profile]
