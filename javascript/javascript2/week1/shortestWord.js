const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findShortestWord(danishWords) {

	let shortWord = danishWords[0];

	for (let i = 1; i < danishWords.length; i++) {
		if (danishWords[i].length < shortWord.length) {
			shortWord = danishWords[i];
		}

	}

	return shortWord;
}

console.log(findShortestWord(danishWords));