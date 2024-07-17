module.exports = {
	env: {
		browser: true,
		node: true,
	},
	root: true,
	parser: "vue-eslint-parser",
	extends: [
		"eslint-config-prettier",
		"plugin:vue/vue3-essential",
		"plugin:prettier/recommended",
	],

	ignorePatterns: [".eslintrc.js", "index.html"],
	overrides: [],
	parserOptions: {
		//把 latest 这里修改一下就好了
		ecmaVersion: 12,
		sourceType: "module",
		extraFileExtensions: [".vue"],
		ecmaFeatures: {
			modules: true,
		},
	},
	plugins: ["vue"],
	rules: {
		"vue/multi-word-component-names": "off",
		"vue/valid-define-props": "off",
		"no-undef": "off",
	},
};
