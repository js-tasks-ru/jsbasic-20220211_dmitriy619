function makeFriendsList(friends) {
  // ваш код...
  let newEl = document.createElement('ul');
  for (friend in friends) {
    newEl.innerHTML += `<li>${friends[friend].firstName + ' ' + friends[friend].lastName}</li>`
  }
  return newEl;
}
