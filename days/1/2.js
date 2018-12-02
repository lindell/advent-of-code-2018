const aocLoader = require('aoc-loader');

function solver(data) {
	const numbers = data.split('\n').map(n => parseInt(n, 10));
	let current = 0;
	const seen = { 0: true };
	for (;;) {
		for (const n of numbers) {
			current += n;
			if (seen[current]) {
				return current;
			}
			seen[current] = true;
		}
	}
}

aocLoader(2018, 1).then(solver)
	.then(ans => console.log(`Answer is: ${ans}`))
	.catch(console.log);
