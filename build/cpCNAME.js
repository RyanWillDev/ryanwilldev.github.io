const fs = require('fs');

const projectRoot = '/Users/ryan/Projects/personal/ryanwilldev.github.io/';
const cnameFile = `${projectRoot}/CNAME`;
const distDirCNAME = `${projectRoot}/dist/CNAME`

fs.createReadStream(cnameFile).pipe(fs.createWriteStream(distDirCNAME));
