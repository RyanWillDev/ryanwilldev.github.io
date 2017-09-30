const util = require('util'),
      exec = require('child_process').exec,
      commitMessage = 'echo ' + process.argv.slice(2);

const childProcess =
  exec('git add dist/ && git commit -m ' + commitMessage + ' && git subtree push --prefix dist/ origin master',
    (err, stdout, stderr) => {
      process.stdout.write(stdout);
      process.stderr.write(stderr);
  });




