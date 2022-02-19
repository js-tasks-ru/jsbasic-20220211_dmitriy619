function camelize(str) {
  // ваш код...
  let split = str.split('-');
  let newstr = split.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
  return newstr.join('');
  
}

