import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import styles from 'rollup-plugin-styles';
import { files, isDev } from './.buildHelpers/rollup';

export default [
  {
    input: [...files('src/ts')],
    output: {
      dir: 'public/dist',
      format: 'esm',
      sourcemap: isDev(),
      assetFileNames: 'styles.css'
    },
    plugins: [
      del({
        targets: 'public/dist/*'
      }),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      isDev() ? null : terser(),
      styles({
        mode: 'extract'
      })
    ]
  }
];
