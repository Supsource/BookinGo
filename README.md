## BookinGo: Find Budget-Friendly Hotels for Your Dream Vacation

Welcome to BookinGo, your go-to solution for finding budget-friendly hotels and planning your dream vacation. This guide will walk you through the process of setting up the MERN (MongoDB, Express, React, Node.js) Booking App on your local machine.


### Prerequisites
Before you begin, ensure you have [Node.js](https://nodejs.org/en) installed on your system.

#### Cloning the Repository
Start by cloning the repository to your local machine:
```bash
git clone https://github.com/Supsource/BookinGo.git
cd mern-booking-app
```

#### Backend Configuration
Navigate to the backend folder and create two files: `.env` and `.env.e2e.` Add the following contents to both files:


```env
MONGODB_CONNECTION_STRING=
JWT_SECRET_KEY=
FRONTEND_URL=

# Cloudinary Variables
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Stripe
STRIPE_API_KEY=
```

#### MongoDB Setup:
1. Sign up for an account at MongoDB Atlas.
2. Create a new cluster and follow the instructions to set up a new database.
3. Obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your .env files.

#### Cloudinary Setup:
1. Create an account at Cloudinary.
2. Navigate to your dashboard to find your cloud name, API key, and API secret.
3. Add these details to the respective `CLOUDINARY_*` variables in your `.env` files.


#### Stripe Setup:
1. Sign up for a Stripe account at Stripe.
2. Find your API keys in the Stripe dashboard.
3. Add your Stripe API key to the `STRIPE_API_KEY` variable in your `.env` files.

#### JWT_SECRET_KEY:
Generate a long, random string for the `JWT_SECRET_KEY`. You can use an online `"secret key generator"` for this.


#### FRONTEND_URL:
The `FRONTEND_URL` should point to the URL where your frontend application is running (typically http://localhost:3000 if you're running it locally).


#### Frontend Configuration:
Navigate to the frontend folder and create a file: `.env`:
```env
VITE_API_BASE_URL=
VITE_STRIPE_PUB_KEY=
```

#### VITE_API_BASE_URL:
Point to the URL where your backend application is running (typically http://localhost:7000 if you're running it locally).

## Running the Application
#### Backend:
1. Navigate to the backend directory.
2. Install dependencies: `npm install`.
3. Start the server: `npm start`.
#### Frontend:
1. Open a new terminal and navigate to the frontend directory.
2. Install dependencies: `npm install`.
3. Start the frontend application: `npm run dev`.
4. 
The application should now be running on http://localhost:5173, but verify this in your command line terminal.








