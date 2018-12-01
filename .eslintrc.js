module.exports = {
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 8,
	},
	"env" : {
		"node": true,
	},
	"rules": {
		"indent": ["error", "tab"],
		"no-tabs": 0,
		"no-use-before-define": ["error", { "functions": false }],
		"no-console": 0
	}
};
