module.exports = {
	"extends": "airbnb-base",
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
		"no-console": 0,
		"no-restricted-syntax": 0,
		"no-plusplus": 0
	}
};
