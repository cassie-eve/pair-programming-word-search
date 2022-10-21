const transpose = function(matrix) {
  let result = []; // Result will be an array of arrays
  for (let i = 0; i < matrix[0].length; i++) {
    let slice = matrix[0].slice(i, i + 1); //Slices each element of the first array as separate arrays
    result.push(slice); // Push the arrays into
  }
  
  for (let j = 1; j < matrix.length; j++) {
    for (let k = 0; k < result.length; k++) {
      result[k].push(matrix[j][k]);
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
  let isWord = false;
  if (!word || typeof word !== 'string') {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      isWord = true;
    }

    const vertical = transpose(letters);
    const verticalJoin = vertical.map(ls => ls.join(''));
    for (let l of verticalJoin) {
      if (l.includes(word)) {
        isWord = true;
      }
    }

  }
  return isWord;
};

module.exports = wordSearch;