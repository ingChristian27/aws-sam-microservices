const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const functionsDir = path.join(__dirname, 'src', 'functions');
const functionDirs = fs.readdirSync(functionsDir);

functionDirs.forEach((dir) => {
  const functionPath = path.join(functionsDir, dir);
  if (fs.lstatSync(functionPath).isDirectory()) {
    console.log(`Installing dependencies for ${dir}...`);
    execSync('npm install', { cwd: functionPath, stdio: 'inherit' });
  }
});

console.log('All dependencies installed!');
