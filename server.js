// no mutations here, no crud
// github.com/graphql/express-graphql
const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const path = require('path');

const app = express();

app.use(cors()); // Allows cross-origin; to allow requests from localhost:3000 to localhost:5000, 'cause our frontend/backend is local

app.use(
  '/graphql', // one endpoint; all the queries, mutations to add, update.. goes into schema
  graphqlHTTP({
    schema,
    graphiql: true // tool to make queries to server reached by localhost:5000/graphql
  })
);

app.use(express.static('public'));
app.get('*', (req, res) => {
  // redirect any /graphql route hit to index.html in public folder
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000; // if deploy, heroku.. will read env.port

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
