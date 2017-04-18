window.addEventListener("load", function (e){
  e.preventDefault();
  var img = document.getElementsByClassName("js-panda");
  var box= document.getElementsByClassName("box-photo");

  createSpan(img,box);

    // document.getElementById('body').classList.add("overflow-hidden");
    // y = window.pageYOffset;

})

function createSpan(img,box){
  for (var i = 0; i < img.length; i++) {
    var span = document.createElement("span");
    var text = document.createTextNode("x");
    span.appendChild(text);
    span.addEventListener("click", function (e){
      // e.target.style=visibility;
      e.target.classList.add("remove");
e.target.previousElementSibling.classList.add("remove");

   });
    box[i].appendChild(span);

  }
}
document.getElementById("restaurar").addEventListener("click", function (e){
  e.preventDefault();
  var children = e.target.parentNode.previousElementSibling.children;
  for (var i = 0; i < children.length; i++) {
    children[i].firstElementChild.classList.remove("remove");
    children[i].lastElementChild.classList.remove("remove");
  }
});
document.getElementById("origin").addEventListener("click", function(e){
  e.preventDefault();
  var hide = e.target.parentNode.nextElementSibling.firstElementChild;
  hide.classList.toggle("visibility");
  console.log();
});

document.getElementById("history").addEventListener("click", function(e){
  e.preventDefault();
  var hide = e.target.parentNode.nextElementSibling.lastElementChild;
  hide.classList.toggle("visibility");
  console.log();
});
