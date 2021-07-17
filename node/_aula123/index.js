// Trabalhando e exemplificando modulo fs -> file system

// Imports do file system e do path para trabalharmos com caminhos e diretorios
const fs = require('fs').promises;  // .promises para poder asyn await
const path = require('path');

async function readDir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);
    
    if(stats.isDirectory()) {
      readDir(fileFullPath);
      continue;
    }

    console.log(fileFullPath, stats.isDirectory());
  }
}

readDir('/home/rafael/Development/js-ts-course/js');