# Just Comedy

Just Comedy is the ultimate app for comedy lovers, crafted out of a deep passion for stand-up. Whether you're a comedy newbie or a seasoned fan, our app uses a fun quiz to understand your humor preferences and matches you with comedians you'll love. Powered by a robust algorithm and a detailed comedian database, Just Comedy offers personalized, relevant recommendations, all wrapped up in an intuitive interface designed for a delightful discovery experience.

## Installation

### Prerequisites

- Node.js (v14.0+ recommended)
- npm (included with Node.js)
- MongoDB (local or remote instance)
- React

### Clone the repository

```bash
# First, clone this repository:
git clone git@github.com:JLopez0001/Just-Comedy-Quiz.git
cd Just-Comedy-Quiz

# Install dependencies
npm install

# Copy the example and create .env file
echo "PORT='3001'\nMONGODB_URI='mongodb+srv://<username>:<password>@<your-cluster-url>/<dbname>'" > .env

# Run the app
nodemon src/index.js # For Back End
npm start # For Front End

# Open in your browser
open http://localhost:3001

# Deep Dive In Our Web App

## Landing Page

![Landing Page](client/public/images/wireFrame/landingPage.png "Landing Page")

## Quiz Page

![Quiz Page](client/public/images/wireFrame/quiz-page.png "Quiz Page")

## Results Page

![Results Page](client/public/images/wireFrame/results-page.png "Results Page")

## Profile Page

![Profile Page](client/public/images/wireFrame/profile-page.png "Profile Page")
```
