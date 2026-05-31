function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('1xbet') || lowerStr.includes('xxx');
}

console.log(checkSpam('1Xbet now') === true);
console.log(checkSpam('fre xxxxx') === true);
console.log(checkSpam('innocent rabbit') === false);
