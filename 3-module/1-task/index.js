function namify(users) {
  // ваш код...
  let names = [];
  for (user in users) {
    names.push(users[user].name)
  }
  return names;
}
