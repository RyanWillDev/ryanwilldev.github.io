export function formatDate(date) {
  const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    pubDate = new Date(date),
    pubMonth = pubDate.getMonth(),
    pubDay = pubDate.getDate(),
    pubYear = pubDate.getFullYear();

  return `${months[pubMonth]} ${pubDay}, ${pubYear}`;
}

export const sortByDate = (p, n) => {
  const pDate = Date.parse(p.node.frontmatter.publicationDate),
    nDate = Date.parse(n.node.frontmatter.publicationDate);

  if (pDate > nDate) return -1;
  else if (pDate < nDate) return 1;
  else return 0;
};
