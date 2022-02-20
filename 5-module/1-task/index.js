function hideSelf() {
  // ваш код...
  let button = document.querySelector('.hide-self-button');
  button.onclick = function(){
      //your handler here
      button.setAttribute('hidden','true')
  }
    
  
}