const aocLoader = require('aoc-loader');

function solver(data) {
	const lines = data.split('\n').map(l => l.split(''));
	let twice = 0;
	let thrice = 0;
	for (const l of lines) {
		const numValues = {};
		for (const v of l) {
			numValues[v] = (numValues[v] || 0) + 1;
		}

		if (Object.values(numValues).includes(2)) {
			twice++;
		}
		if (Object.values(numValues).includes(3)) {
			thrice++;
		}
	}

	return twice * thrice;
}

aocLoader(2018, 2).then(solver)
	.then(ans => console.log(`Answer is: ${ans}`))
	.catch(console.log);
