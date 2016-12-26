const fs = require('fs');
const showdown = require('showdown');
// showdown.setOption('noHeaderId', true);

const converter = new showdown.Converter();
const path = '../src/journal/';
const entriesPath = `${path}journal_entries/`;

const entries = fs.readdirSync(entriesPath);

const journal = entries.reduce((prev, dir) => {
  const entry = {};
  fs.readdirSync(entriesPath + dir)
  .forEach((file) => {
    if (file.includes('json')) {
      const data = JSON.parse(fs.readFileSync(`${entriesPath}${dir}/${file}`, 'utf8'));
      entry.data = data;
    } else {
      const html = converter.makeHtml(fs.readFileSync(`${entriesPath}${dir}/${file}`, 'utf8'));
      entry.html = html;
    }
  });
  return prev.concat(entry);
}, []);
fs.writeFileSync(`${path}journal.json`, JSON.stringify(journal));
