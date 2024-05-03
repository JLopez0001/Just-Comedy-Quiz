# Table of Contents

- [Just Comedy](#just-comedy)
  - [Introduction](#introduction)
- [User Story](#user-story)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Clone the repository](#clone-the-repository)
- [Final Screenshots](#final-screenshots)
  - [Landing Page](#landing-page)
  - [Quiz Page](#quiz-page)
  - [Results Page](#results-page)
  - [Profile Page](#profile-page)

# Just Comedy

Just Comedy is the ultimate app for comedy lovers, crafted out of a deep passion for stand-up. Whether you're a comedy newbie or a seasoned fan, our app uses a fun quiz to understand your humor preferences and matches you with comedians you'll love. Powered by a robust algorithm and a detailed comedian database, Just Comedy offers personalized, relevant recommendations, all wrapped up in an intuitive interface designed for a delightful discovery experience.

## User Story

As a passionate comedy enthusiast, I've always been deeply immersed in the world of stand-up comedy. Sharing this passion with my friends, however, often presented a challenge. It wasn't easy figuring out which comedians they would like, leading me to pepper them with numerous questions in hopes of making a perfect match.

Driven by the desire to simplify this process and make stand-up comedy more accessible to my friends, I created a unique solution. I developed a database filled with detailed information on various comedians. Alongside this, I crafted a set of curated questions designed specifically to guide my friends to discover their ideal comedy match with ease.

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

```

## Final Screenshots

### Landing Page

![Landing Page](client/public/images/wireFrame/landingPage.png "Landing Page")

### Quiz Page

![Quiz Page](client/public/images/wireFrame/quiz-page.png "Quiz Page")

### Results Page

![Results Page](client/public/images/wireFrame/results-page.png "Results Page")

### Profile Page

![Profile Page](client/public/images/wireFrame/profile-page.png "Profile Page")
