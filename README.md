# Rancid Tomatillos API

## Abstract
This API was designed to pair with this Rancid Tomatillos project [here](https://github.com/dstavis/rancid-tomatillos). This project began design with 2 different endpoints from herokuapp.com.

Those endpoints can be found here:
Get all movies - [here](https://rancid-tomatillos.herokuapp.com/api/v2/movies)
Get a single movie - [here](https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id)

This single API was created to store the details for each of the 40 movies in one place which was required to allow the user to filter movies by genre with respect to the applications architecture.

## Technologies Used
- Express 
- Node.js
- GitHub & Git

## Setup  

1. On the top right corner of this page, click the Fork button.
2. Clone down the forked repo into a local directory.  CD into that directory
3. Then install the library dependencies. Run:

```bash or zsh
npm install
```

To verify that it is setup correctly, run `node server.js` in your terminal. 

You should see:

```bash or zsh
Rancid Custom API is running on http://localhost:3002.
```

4.  Go to `http://localhost:3002/` and you should see "Rancid Custom API" at the top of the browser window

Enter `control + c` in your terminal to stop the server at any time.

You will need both hosts running locally to see the fully functioning "Rancid Tomatillos" website.

## Members
David Stavis & Eddie Rodriguez

## Links
- [Project Requirements](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)




