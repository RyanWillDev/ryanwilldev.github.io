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
    pubDay = pubDate.getDate() + 1,
    pubYear = pubDate.getFullYear();

  return `${months[pubMonth]} ${pubDay}, ${pubYear}`;
}
