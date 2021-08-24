//Create an array of movies containing the movies with a short title 
const shortTitleMovies = movies.filter (movie => movie.title.length <= 3);

//Create an array of movie titles with long movie titles
const longTitleMovies = movies.filter(movie => movie.title.length >= 30);

//Count the number of movies made between 1980-1989 (including both the years)
const moviesFromTheEighties = movies.filter (movie => (movie.year > 1980 && movie.year <= 1989).length);
console.log(moviesFromTheEighties);