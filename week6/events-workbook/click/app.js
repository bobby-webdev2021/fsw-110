// make the box disapear when the user clicks it
window.onload = function(){
    var hideMe = document.getElementById('red-box');
    document.onclick = function(e){
       if(e.target.id == 'red-box'){
          hideMe.style.display = 'none';
      }
    };
 }
