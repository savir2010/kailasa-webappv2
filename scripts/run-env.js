import { spawn } from "child_process";
import { createRequire } from "module";
import path from "path";

const require = createRequire(import.meta.url);

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: pnpm env:run <dev|staging|prod> [--build]');
  process.exit(1);
}

const envArg = args[0].toLowerCase();
const isBuild = args.includes('--build') || args.includes('-b');

const modeMap = {
  dev: 'development',
  development: 'development',
  staging: 'staging',
  stage: 'staging',
  prod: 'production',
  production: 'production',
};

const mode = modeMap[envArg] || envArg;

if (!mode) {
  console.error(`Unknown environment: ${envArg}`);
  process.exit(1);
}

const vitePkgPath = require.resolve('vite/package.json');
const vitePkg = require('vite/package.json');
const viteBinRelative = typeof vitePkg.bin === 'string' ? vitePkg.bin : vitePkg.bin?.vite;

if (!viteBinRelative) {
  console.error('Unable to determine Vite binary path from package.json');
  process.exit(1);
}

const viteBin = path.resolve(path.dirname(vitePkgPath), viteBinRelative);
const commandArgs = isBuild
  ? [viteBin, 'build', '--mode', mode]
  : [viteBin, '--mode', mode];

console.log(`Running Vite in ${isBuild ? 'build' : 'dev'} mode with environment: ${mode}`);

const child = spawn(process.execPath, commandArgs, {
  stdio: 'inherit',
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
