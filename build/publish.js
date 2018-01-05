const fs = require("fs");
const showdown = require("showdown");
// showdown.setOption('noHeaderId', true);

const converter = new showdown.Converter();
const path = "/Users/ryan/Projects/personal/ryanwilldev.github.io/journal/";
const entriesPath = `${path}journal_entries/`;

const entries = fs.readdirSync(entriesPath);

const journal = entries
  .reduce((prev, dir) => {
    const entry = {};

    fs.readdirSync(entriesPath + dir).forEach(file => {
      if (file.includes(".json")) {
        const data = JSON.parse(
          fs.readFileSync(`${entriesPath}${dir}/${file}`, "utf8")
        );
        entry.data = data;
      } else {
        const html = converter.makeHtml(
          fs.readFileSync(`${entriesPath}${dir}/${file}`, "utf8")
        );
        entry.html = html;
      }
    });
    return prev.concat(entry);
  }, [])
  .sort((p, n) => {
    const pDate = Date.parse(p.data.publicationDate),
      nDate = Date.parse(n.data.publicationDate);

    if (pDate > nDate) return -1;
    else if (pDate < nDate) return 1;
    else return 0;
  })
  .map(entry => {
    entry.data.publicationDate = formatDate(entry.data.publicationDate);
    return entry;
  });

fs.writeFileSync(`${path}journal.json`, JSON.stringify(journal));

function formatDate(date) {
  const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    pubDate = new Date(date),
    pubMonth = pubDate.getMonth(),
    pubDay = pubDate.getDate(),
    pubYear = pubDate.getFullYear();

  return `${months[pubMonth]} ${pubDay}, ${pubYear}`;
}
