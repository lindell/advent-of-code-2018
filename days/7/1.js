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

	const res = [];
	while (deps.length > 0) {
		const next = deps.filter(d => d.deps.length === 0).sort((a, b) => a.char.charCodeAt(0) - b.char.charCodeAt(0))[0];
		deps = deps.filter(d => d.char !== next.char);
		deps.forEach((d) => { d.deps = d.deps.filter(a => a !== next.char); });
		res.push(next.char);
	}
	return res.join('');
}

aocLoader(2018, 7).then(solver)
	.then(ans => console.log(`Answer is: ${ans}`))
	.catch(console.log);
