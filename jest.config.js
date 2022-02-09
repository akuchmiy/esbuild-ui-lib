module.exports = {
	verbose: true,
	transform: {
		'^.+\\.tsx?$': 'esbuild-jest',
	},
	moduleNameMapper: {
		'\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
	},
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
}
