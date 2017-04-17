window.addEventListener("load", function (e){
  e.preventDefault();
  var img = document.getElementsByClassName("js-panda");
  var box= document.getElementsByClassName("box-photo");

  createSpan(img,box);
})

function createSpan(img,box){

  for (var i = 0; i < img.length; i++) {
    var span = document.createElement("span");
    var text = document.createTextNode("x");
    span.appendChild(text);
    box[i].appendChild(span);
  }
}
