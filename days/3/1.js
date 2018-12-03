const aocLoader = require('aoc-loader');

function solver(data) {
	const lines = data
		.split('\n')
		.map(l => l.match(/^#(\d+) @ (\d+),(\d+): (\d+)x(\d+)$/))
		.map(l => ({
			x: parseInt(l[2], 10),
			y: parseInt(l[3], 10),
			width: parseInt(l[4], 10),
			height: parseInt(l[5], 10),
		}));
	const width = lines.reduce((max, l) => Math.max(l.x + l.width, max), 0);
	const height = lines.reduce((max, l) => Math.max(l.y + l.height, max), 0);

	const map = [];
	for (let y = 0; y < height; y++) {
		map.push([]);
		for (let x = 0; x < width; x++) {
			map[y].push(0);
		}
	}

	for (const l of lines) {
		for (let y = 0; y < l.height; y++) {
			for (let x = 0; x < l.width; x++) {
				map[l.y + y][l.x + x] += 1;
			}
		}
	}

	let doubles = 0;
	for (let y = 0; y < width; y++) {
		for (let x = 0; x < height; x++) {
			if (map[y][x] > 1) {
				doubles += 1;
			}
		}
	}

	return doubles;
}

aocLoader(2018, 3).then(solver)
	.then(ans => console.log(`Answer is: ${ans}`))
	.catch(console.log);
