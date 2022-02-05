const esbuild = require('esbuild')
const esbuildCssModulesPlugin = require('esbuild-css-modules-plugin')
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
			esbuildCssModulesPlugin({}),
			postCssPlugin({
				plugins: [postcssImport, tailwindcss, autoprefixer],
			}),
		],
	})
	.catch((error) => console.log(error))
