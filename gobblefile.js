/*global require, module */
var gobble = require( 'gobble' );
var resolve = require( 'rollup-plugin-node-resolve' )
var commonjs = require( 'rollup-plugin-commonjs' )
var babel = require('rollup-plugin-babel');
var es2015Rollup = require('babel-preset-es2015-rollup')

module.exports = gobble( 'src' )

	.transform( 'rollup', {
            sourceMap: true,
			plugins: [
				resolve({
					module: true,
					jsnext: true,
					main: true,
					browser: true,
					skip:['ractive']
				}),
				commonjs(),
                babel({
                    exclude: 'node_modules/**',
                    presets: [ es2015Rollup ]
                })
			],
			entry: 'rvc.js',
			dest: 'rvc.js',
			format: 'amd',
			moduleName: 'rvc',
			external: [ 'ractive' ]
	});
