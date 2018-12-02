const aocLoader = require('aoc-loader');

function solver(data) {
	const lines = data.split('\n').map(l => l.split(''));
	for (let i = 0; i < lines.length; i++) {
		for (let j = i + 1; j < lines.length; j++) {
			if (diffLines(lines[i], lines[j]) === 1) {
				return shared(lines[i], lines[j]).join('');
			}
		}
	}
	return undefined;
}

function shared(l1, l2) {
	const res = [];
	for (let i = 0; i < l1.length; i++) {
		if (l1[i] === l2[i]) {
			res.push(l1[i]);
		}
	}
	return res;
}

function diffLines(l1, l2) {
	let diff = 0;
	for (let i = 0; i < l1.length; i++) {
		if (l1[i] !== l2[i]) {
			diff++;
		}
	}
	return diff;
}

aocLoader(2018, 2).then(solver)
	.then(ans => console.log(`Answer is: ${ans}`))
	.catch(console.log);
