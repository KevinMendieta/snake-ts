import * as fs from 'fs';
import path from 'path';

export const isDev = () =>
  !!process.argv.find((argument) => argument === '--config-dev');

export const files = (sourceDir) =>
  fs
    .readdirSync(sourceDir)
    .filter((dir) => path.extname(dir) === '.ts')
    .map((file) => `${sourceDir}/${file}`);
