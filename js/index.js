document.addEventListener("DOMContentLoaded", hiddenCloseclick());
document.getElementById('click-to-hide').addEventListener("click", hiddenCloseclick);
  function hiddenCloseclick() {
  let x = document.getElementById('hidden-element');
    if (x.style.display == "none"){
    x.style.display = "block";
    } else {
   x.style.display = "none"}
  };


  document.querySelector('#button').onclick = function() {
    if(this.innerHTML == "Скрыть объекты")
  {
    this.innerHTML = "Больше объектов";
    return;
  }
  else this.innerHTML = "Скрыть объекты";
  }