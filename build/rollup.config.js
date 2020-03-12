import typescript from 'rollup-plugin-typescript2';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser'
 
export default {
  input: 'src/index.ts',
  output: [
    {
        name: 'ZdmUtils',
        file: path.resolve(__dirname, '../lib/index.umd.js'),
        format: 'umd'
    },
    {
        name: 'ZdmUtils',
        file: path.resolve(__dirname, '../lib/index.esm.js'),
        format: 'esm'
    }
],
  plugins: [
      resolve(),
      commonjs(),
      typescript(),
      babel({
        exclude: 'node_modules/**'
      }),
      terser({
        output: {
            ascii_only: true // 仅输出ascii字符
        }
        // compress: {
        //     pure_funcs: ['console.log'] // 去掉console.log函数
        // }
    })
  ]
};