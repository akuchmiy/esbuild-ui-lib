module.exports = {
	purge: {
		enabled: true,
		content: ['./src/**/*.tsx', './src/**/*.css', './src/**/*.ts'],
		options: {
			safelist: ['dark'],
		},
	},
	darkMode: 'class',
}
