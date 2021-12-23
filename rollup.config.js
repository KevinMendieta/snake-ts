import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import clear from 'rollup-plugin-clear';
import { files, isDev } from './.buildHelpers/rollup';

export default [
  {
    input: [...files('src/ts')],
    output: {
      dir: 'public/js',
      format: 'esm',
      sourcemap: isDev()
    },
    plugins: [
      clear({
        targets: ['public/js'],
        watch: true
      }),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      isDev() ? null : terser()
    ]
  }
];
