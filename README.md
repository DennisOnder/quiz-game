# Quiz Game

[![Build Status](https://travis-ci.org/DennisOnder/quiz-game.svg?branch=master)](https://travis-ci.org/DennisOnder/quiz-game)

> A small quiz game made for fun.

---

### Data

> You are required to provide your own data to the database by manually importing it via mongotools or whatever solution you see fit.

> If no data has been provided, there is a fallback API call to the OpenTDB API which provides the data in that case.

> JSON example:

```json
{
  "answers": ["2K Games", "Activision", "Rockstar Games"],
  "_id": "5d07acf07be9cb157e7b44ae",
  "body": "Which company developed the video game \"Borderlands\"?",
  "providedBy": "OpenTDB API",
  "correctAnswer": "Gearbox Software",
  "createdAt": "2019-06-17T15:08:32.792Z"
}
```

---

### Scripts

> The scripts are supposed to be ran from root level of the file structure.

- `npm start` - Runs both the Node and React server concurrently.

- `npm run client` - Runs the React development server.

- `npm run server` - Runs the Node server.

- `npm run prep` - Installs dependencies for the server and React.

- `npm test` - Runs the test suite

---

### Environmental Variables:

> The `.env.example` file provides all the necessary variables required for running the application.

> You are required to create your own `.env` file in the root directory and provide your own information.

---
