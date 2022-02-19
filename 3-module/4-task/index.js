function showSalary(users, age) {
  // ваш код...
  let str=[];
  for (user in users) {
    if (users[user].age <= age) {
      str.push(users[user].name +', ' + users[user].balance); 
    } 
  }
  return str.join('\n');
}
