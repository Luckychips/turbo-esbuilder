import esbuild from 'esbuild';
import path from 'path';

const entryFile = 'src/index.ts';
const distDir = 'dist';

const commonOptions = {
  entryPoints: [entryFile],
  bundle: true,
  sourcemap: true,
  minify: false,
  external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
  tsconfig: 'tsconfig.json',
};

async function buildCJS() {
  await esbuild.build({
    ...commonOptions,
    outfile: path.join(distDir, 'index.cjs.js'),
    format: 'cjs',
    platform: 'node',
    target: ['node14'],
  });
}

async function buildESM() {
  await esbuild.build({
    ...commonOptions,
    outfile: path.join(distDir, 'index.esm.js'),
    format: 'esm',
    platform: 'browser',
    target: ['es2020'],
  });
}

async function buildTypes() {
  const { exec } = await import('child_process');
  return new Promise((resolve, reject) => {
    exec('tsc --emitDeclarationOnly --declaration --outDir dist/types', (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function buildAll() {
  await buildTypes();
  await buildCJS();
  await buildESM();
}

buildAll().catch(e => {
  console.error(e);
  process.exit(1);
});
