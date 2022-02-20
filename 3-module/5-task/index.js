function getMinMax(str) {
  // ваш код...
  let split = str.split(' ');
  let newarr = [];
  let result = {
    min:Infinity,
    max:-Infinity
  }
  for (symbol in split) {
    if(parseFloat(split[symbol] )){
      newarr.push(parseFloat(split[symbol]));
    }
  }
  for (element in newarr) {
    if(newarr[element] < result.min) {
      result.min = newarr[element]
    }
		if(newarr[element] > result.max) {
      result.max = newarr[element]
    }
  }
  return result;
  
}
