window.addEventListener("load", function (e){
  e.preventDefault();

  createSpan(document.getElementsByClassName("js-panda"),document.getElementsByClassName("box-photo"));
})
function createSpan(img,box){
  for (var i = 0; i < img.length; i++) {
    var span = document.createElement("span");
    var text = document.createTextNode("x");
    span.appendChild(text);
    span.addEventListener("click", function (e){
      e.target.classList.add("remove");
      e.target.previousElementSibling.classList.add("remove");
   });
    box[i].appendChild(span);

  }
}
// SHOW/HIDDEN TEXT
document.getElementById("origin").addEventListener("click", function(e){
  e.preventDefault();
  var hide = e.target.parentNode.nextElementSibling.firstElementChild;
  hide.classList.toggle("visibility");
});

document.getElementById("history").addEventListener("click", function(e){
  e.preventDefault();
  e.target.parentNode.nextElementSibling.lastElementChild.classList.toggle("visibility");
});
// SHOW ALL IMG
document.getElementById("restaurar").addEventListener("click", function (e){
  e.preventDefault();
  var children = e.target.parentNode.previousElementSibling.children;
  for (var i = 0; i < children.length; i++) {
    children[i].firstElementChild.classList.remove("remove");
    children[i].lastElementChild.classList.remove("remove");
  }
});
