const aocLoader = require('aoc-loader');

function solver(data) {
	return data.split('\n').map(n => parseInt(n, 10)).reduce((a,b) => a + b, 0)
}

aocLoader(2018, 1).then(solver)
	.then((ans) => console.log(`Answer is: ${ans}`))
	.catch(console.log);
