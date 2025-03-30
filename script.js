function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function addSearch() {
  var input = document.getElementById("search");
  if (input.value === "") {
    input.value = "Search";
  }
}

function removeSearch (){
  var input = document.getElementById("search");
  if (input.value === "Search") {
    input.value = "";
  }
}

function searchBarEvents(){
  var input = document.getElementById("search");
  if (input) {
    input.addEventListener("click", removeSearch)
    input.addEventListener("blur", addSearch);
  }
}

document.addEventListener("DOMContentLoaded", searchBarEvents);
