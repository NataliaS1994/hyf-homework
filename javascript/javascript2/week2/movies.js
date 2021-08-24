//Create an array of movies containing the movies with a short title 
const shortTitleMovies = movies.filter (movie => movie.title.length <= 3);

//Create an array of movie titles with long movie titles
const longTitleMovies = movies.filter(movie => movie.title.length >= 30);

//Count the number of movies made between 1980-1989 (including both the years)
const moviesFromTheEighties = movies.filter (movie => (movie.year > 1980 && movie.year <= 1989).length);
console.log(moviesFromTheEighties);

//Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const moviesWithTag = movies.map(movie => {
    if(movie.rating >= 7) {
      movie.tag = "Good"
    } else if(movie.rating >= 4) {
      movie.tag = "Average"
    } else {
      movie.tag = "Bad"
  })
  console.log(moviesWithTag);