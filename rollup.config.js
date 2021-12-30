import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
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
      del({
        targets: 'public/js/*'
      }),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      isDev() ? null : terser(),
    ]
  }
];
