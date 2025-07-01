
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {},
		screens: {
			'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
			'tallscreen': { 'raw': '(min-aspect-ratio: 1/2)' },
		}
	},
	plugins: [],
};
