export const getPaginatedArray = (current, total) => {
  if (total === 0) {
    return [];
  }

  const pages = [];
  const step = 3;

  if (total < step * step) {
    for (let i = 1; i <= total; i += 1) {
      pages.push(i);
    }
    return pages;
  }

  // pages.push(1, 2, 3, current, total - 2, total - 1, total);

  // if (current + step < total) {
  //   pages.push(current + 1);
  // }
  //
  // if (current - step > 0) {
  //   pages.push(current - 1);
  // }
  //
  // pages = deleteDuplicateValues(pages);
  //
  // pages.sort((a, b) => a - b);
  //
  //
  // for (let i = 0; i < pages.length - 1; i += 1) {
  //   if (pages[i + 1] - pages[i] > 1) {
  //     newArr[i] = '...';
  //     newArr[i + 1] = pages[i];
  //   } else {
  //     newArr[i] = pages[i]
  //   }
  //
  //
  // }
  //
  //
  //
  // return pages;


  if (current - step < 0 || current + step >= total) {
    pages.push(1, 2, 3, '...', total - 3, total - 2, total - 1, total);
  }

  if (current - step === 2) {
    pages.push(1, 2, 3, current - 1, current, current + 1, '...', total - 2, total - 1, total);
  }

  if (current - step === 1) {
    pages.push(1, 2, 3, current, current + 1, '...', total - 2, total - 1, total);
  }

  if (current - step === 0) {
    pages.push(1, 2, 3, current + 1, '...', total - 2, total - 1, total);
  }

  // if (current + step === total) {
  //   pages.push(1, 2, 3, '...', current, total - 2, total - 1, total);
  // }

  if (!pages.length) {
    pages.push(1, 2, 3, '...', current - 1, current, current + 1, '...', total - 2, total - 1, total);
  }

  return pages;
};
