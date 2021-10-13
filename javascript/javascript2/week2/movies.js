//Create an array of movies containing the movies with a short title 
const { movies } = require(`./movies`);

const shortTitleArray = movies
  .filter((str) => str.title.length <= 3)
  .map((str) => str.title);

console.log(shortTitleArray);

//Create an array of movie titles with long movie titles
const longTitleArray = movies
  .filter((name) => name.title.length >= 30)
  .map((name) => name.title);

console.log(longTitleArray);

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
    }
  });
  console.log(moviesWithTag);

  //Using chaining, first filter the movies array to only contain the movies rated higher than 6 & then map
 let highRates= movies.filter (movie => movie.rating > 6).map(movie => movie.rating);

 //Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin
 const amountOfWords = movies.filter (movie => (
    movie.title.includes("Surfer") 
    || movie.title.includes("Alien") 
    || movie.title.includes("Benjamin")
  )).length;
  
  console.log(amountOfWords);
  
  //Create an array of movies where a word in the title is duplicated
let duplicatedWords = [];
movies.map((moviesTitle) => moviesTitle.title.split("")) 
  .forEach((title) =>
    title.filter((word, index) => {
      if (title.indexOf(word) != index) {
        duplicatedWords.push(title.join(" "));
      }
    })
  );
console.log(duplicatedWords);

