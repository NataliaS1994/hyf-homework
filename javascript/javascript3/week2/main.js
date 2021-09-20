//Movies exercise
async function getBadMovies() {
    try {
      const moviesListing = await fetch(
        "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
      );
      const movies = await moviesListing.json();
      const badMovies = movies.filter((movie) => movie.rating < 5);
      const badMoviesSince2000 = badMovies.filter((movie) => movie.year > 2000);
      console.log(badMovies);
      console.log(badMoviesSince2000);
    } catch (error) {
      throw "Something went wrong";
    }
  }
  getBadMovies();

  //Promise that resolves after set time
  function makePromise(resolveAfter) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), resolveAfter * 3000);
	});
}
console.log("I am called asynchronously")

//Using async/await
async function asyncAwaitExample() {
	const promise = await makePromise(8);
	console.log("I am called asynchronously")
}

//REWRITE TIME
//Rewrite setTimeout to promises
function setTimeoutPromise(timeout) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, timeout);
	});
}
setTimeoutPromise(3000).then(() => {
	console.log("Called after 3 seconds");
});

//Rewrite navigator.geolocation.getCurrentPosition to promises
function getCurrentLocation(timeout) {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((position) => resolve(position)), error => reject(error)
	});
};
getCurrentLocation()
	.then((position) => {
		// called when the users position is found
		console.log(position);
	})
	.catch((error) => {
		// called if there was an error getting the users location
		console.log(error);
	});
//Fetching & waiting
new Promise((resolve) =>
	setTimeout(() =>
		fetch("https://yesno.wtf/api")
		.then(response => response.json())
		.then(data => resolve(data.answer)),
		3000)).then(data => console.log('the response is:', data));

//using async/await
function getData() {
	setTimeout(async() => {
		const fetchedResponse = await fetch("https://yesno.wtf/api");
		const fetchedData = await fetchedResponse.json();
		const answer = fetchedData.answer;
		console.log("async function: ", answer);
	}, 3000)
}