export const getPaginatedArray = (current, total) => {
  if (total === 0) {
    return [];
  }

  let pages = [];
  const step = 3;

  if (total < step * 2 + 1) {
    for (let i = 1; i <= total; i += 1) {
      pages.push(i);
    }
    return pages;
  }

  pages.push(1, 2, 3, total - 2, total - 1, total);

  if (pages.indexOf(current) === -1) {
    pages.push(current);
  }

  if (current + step < total && pages.indexOf(current + 1) === -1) {
    pages.push(current + 1);
  }

  if (current - step > 0 && pages.indexOf(current - 1) === -1) {
    pages.push(current - 1);
  }

  pages.sort((a, b) => a - b);

  for (let i = 1; i < pages.length; i += 1) {
    if (pages[i] - pages[i - 1] > 1) {
      pages = [
        ...pages.slice(0, i),
        '...',
        ...pages.slice(i),
      ];
    }
  }

  return pages;
};