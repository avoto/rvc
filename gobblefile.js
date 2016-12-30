/*global require, module */
var gobble = require( 'gobble' );
var resolve = require( 'rollup-plugin-node-resolve' )
var commonjs = require( 'rollup-plugin-commonjs' )

module.exports = gobble( 'src' )

	.transform( 'rollup', 	{
			plugins: [resolve({
				module: true,
				jsnext: true,
				main: true,
				browser: true,
				skip:['ractive']
			}), commonjs()],
			entry: 'rvc.js',
			dest: 'rvc.js',
			format: 'amd',
			moduleName: 'rvc',
			external: [ 'ractive' ]
		});
	//
