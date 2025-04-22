// method that return true if have all unique caharacters

const inUnique = (str) => {
  const set = new Set(str);

  return str.length === set.size;
};

const isEqual = (obj, obj2) => {
  if (Object.keys(obj).length !== Object.keys(obj2).length) return false;
  for (key in obj) {
    if (obj[key] !== obj2[key]) return false;
  }
  return true;
};

const objCounter = (str) => {
  const chartCount = {};

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    chartCount[currentChar] = (chartCount[currentChar] || 0) + 1;
  }
  return chartCount;
};

const isApermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const charObj1 = objCounter(str1);
  const charObj2 = objCounter(str2);

  return isEqual(charObj1, charObj2);
};

const isOneAway = (str1, str2) => {
  const len1 = str1.length;
  const len2 = str2.length;
  // difference its to high
  if (Math.abs(len1 - len2) > 1) return false;

  // s1 will be the shorter string always
  const s1 = len1 < len2 ? str1 : str2;
  const s2 = len1 < len2 ? str2 : str1;

  let index1 = 0;
  let index2 = 0;
  let foundDiff = false;
  while (index1 < s1.length && index2 < s2.length) {
    if (s1[index1] !== s2[index2]) {
      if (foundDiff) return false;
      foundDiff = true;

      if (s1.length === s2.length) {
        index1++;
      }
    } else {
      index1++;
    }
    index2++;
  }
  return true;
};

const stringCompression = (str) => {
  const hash = {};

  for (let i = 0; i < str.length; i++) {
    const currenChar = str[i];
    hash[currenChar] = (hash[currenChar] || 0) + 1;
  }

  const result = Object.entries(hash).reduce((acc, [key, value]) => {
    acc += `${key}${value}`;
    return acc;
  }, "");
  return result;
};

const stringCompression = (str) => {
  let character = str[0];
  let compressed = "";
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (currenChar === character) {
      counter++;
    } else {
      compressed += `${character}${counter || ""}`;
      character = currentChar;
      counter = 0;
    }
  }

  return compressed;
};
