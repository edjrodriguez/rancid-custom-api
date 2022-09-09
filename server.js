const express = require('express');
const movieData = require("./movieData.json")  
const app = express();
const cors = require('cors')

app.use(cors());

app.set('port',  3002);
app.locals.title = 'Genre API';

app.get('/', (request, response) => {
  response.send('Genre API');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.locals.movies = movieData

app.get('/movies', (request, response) => {
    const movies = app.locals.movies
    response.status(200).json(movies);
  });


  app.get('/movies/:id', (request, response) => {
    console.log(app.locals.movies)
    const { id } = request.params
    const movie = app.locals.movies.movies.find(movie => movie.id == id)
    if(!movie) {
        return response.sendStatus(404)
    }
    const data = {movie: movie}
    response.status(200).json(data);
   
  });