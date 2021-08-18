const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};


// if ********** - space
// if 10 - '.'
// if 11 - '-'
function decode(expr) {
	// write your solution here
	let startPosition = 0;
	let result = "";
	for (let i = 0; i < expr.length / 10; i++) {
		let letterNums = expr.slice(startPosition, startPosition + 10);
		startPosition += 10;
		if (letterNums === "**********") {
			result += " ";
			continue;
		}
		let morsed = "";
		for (let j = 10; j > 0; j -= 2) {
			switch (letterNums.slice(j - 2, j)) {
				case "10": morsed += "."; break;
				case "11": morsed += "-"; break;
				default: break;
			}
		}
		result += MORSE_TABLE[morsed.split("").reverse().join("")];
	}
	return result;
}

module.exports = {
	decode
}