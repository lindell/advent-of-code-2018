const aocLoader = require('aoc-loader');

const width = 500;
const height = 500;
const infinite = [];


function solver(data) {
	const rawDeps = data.split('\n').map((l) => {
		const s = l.split(' ');
		return { char: s[7], dep: s[1] };
	});

	let deps = [];
	for (const dep of rawDeps) {
		const existing = deps.find(d => dep.char === d.char);
		if (existing) {
			existing.deps.push(dep.dep);
		} else {
			deps.push({ char: dep.char, deps: [dep.dep] });
		}
		const existingDep = deps.find(d => dep.dep === d.char);
		if (!existingDep) {
			deps.push({ char: dep.dep, deps: [] });
		}
	}

	let workers = [{ time: 0 }, { time: 0 }, { time: 0 }, { time: 0 }, { time: 0 }];
	let time = 0;
	const res = [];
	while (deps.length > 0 || workers.some(w => w.time >= 0)) {
		workers = workers.map(w => ({ time: w.time - 1 }));
		time += 1;
		const nextWorker = workers.find(w => w.time < 0);
		if (!nextWorker) {
			continue;
		}

		if (deps.length === 0) {
			continue;
		}

		const next = deps.filter(d => d.deps.length === 0).sort((a, b) => a.char.charCodeAt(0) - b.char.charCodeAt(0))[0];
		deps = deps.filter(d => d.char !== next.char);
		deps.forEach((d) => { d.deps = d.deps.filter(a => a !== next.char); });
		res.push(next.char);
		nextWorker.time = 60 + next.char.charCodeAt(0) - 64;
	}

	return time;
}

aocLoader(2018, 7).then(solver)
	.then(ans => console.log(`Answer is: ${ans}`))
	.catch(console.log);

// Promise.resolve(`Step C must be finished before step A can begin.
// Step C must be finished before step F can begin.
// Step A must be finished before step B can begin.
// Step A must be finished before step D can begin.
// Step B must be finished before step E can begin.
// Step D must be finished before step E can begin.
// Step F must be finished before step E can begin.`).then(solver)
// 	.then(ans => console.log(`Answer is: ${ans}`))
// 	.catch(console.log);
