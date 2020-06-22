export const formatNum = (num) => {
  if (typeof num !== 'number') return num;
  const numStr = parseFloat(num).toFixed(2);
  const decimal = numStr.indexOf('.') || numStr.length - 1;
  const arrStr = numStr.split('');
  let count = 0;
  for (let i = decimal; i >= 0; i--) {
    if (count === 3) {
      arrStr.splice(i, 0, ',');
      count = 0;
      i++;
    } else count++;
  }
  if (arrStr[0] === ',') arrStr.splice(0, 1);
  return arrStr.join('');
};
