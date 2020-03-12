import typescript from 'rollup-plugin-typescript2';
import path from 'path';
 
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
  plugins: [typescript()]
};