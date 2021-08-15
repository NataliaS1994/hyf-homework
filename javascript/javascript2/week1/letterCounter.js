const danishString1 = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";


function danishLetterCounter(stringToCheck) {
	const arrStr = stringToCheck.toLowerCase().split('')
	const danishLetters = []
	for (let i = 0; i < arrStr.length; i++) {
		if (arrStr[i] === 'ø' || arrStr[i] === 'å' || arrStr[i] === 'æ') {
			danishLetters.push(arrStr[i])
		}
	}
	let result = {
		total: danishLetters.length
	}
	danishLetters.forEach(item => {
		if (result[item]) {
			result[item] += 1
			return
		}
		result[item] = 1;
	})
	return result
}

console.log(danishLetterCounter(danishString1));
console.log(danishLetterCounter(danishString2));