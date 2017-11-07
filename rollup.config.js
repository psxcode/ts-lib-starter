import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

export default {
	input: 'src/index.ts',
	output: {
    format: 'cjs',
	  file: 'dist/index.js'
  },

	plugins: [
	  typescript(),
	  uglify()
  ],

	external: [],
}
