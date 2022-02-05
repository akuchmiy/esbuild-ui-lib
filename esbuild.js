const esbuild = require('esbuild')
const postCssPlugin = require('@deanc/esbuild-plugin-postcss')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('@tailwindcss/postcss7-compat')
const postcssImport = require('postcss-import')

esbuild
	.build({
		entryPoints: ['src/index.ts'],
		bundle: true,
		minify: true,
		format: 'esm',
		sourcemap: true,
		outdir: 'dist',
		plugins: [
			postCssPlugin({
				plugins: [postcssImport, tailwindcss, autoprefixer],
			}),
		],
	})
	.catch((error) => console.log(error))
