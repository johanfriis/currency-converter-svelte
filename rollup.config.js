import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',
  output: {
    name: 'addCurrencyConverter',
    file: 'public/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    svelte(),
    resolve(),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), transpile and minify
    production && buble({ exclude: 'node_modules/**' }),
    production && terser(),
  ],
}
