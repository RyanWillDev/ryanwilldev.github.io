function formatTagForUrl(tag) {
  return tag.split(' ').join('-');
}

function formatTagForJournalSearch(tag) {
  return tag.split('-').join(' ');
}

module.exports = { formatTagForJournalSearch, formatTagForUrl };
