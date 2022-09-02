const express = require('express');
const movieData = require("./movieData.json")  
const app = express();

app.set('port', process.env.PORT || 3002);
app.locals.title = 'Genre API';

app.get('/', (request, response) => {
  response.send('Genre API');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.locals.movies = [movieData]

app.get('/movies', (request, response) => {
    const movies = app.locals.movies
    response.send(movies);
  });
