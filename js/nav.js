function myFunction(event, language) {
  document.getElementById("current-language").innerText = event.target.innerText;
  document.getElementById("current-language").setAttribute("data-lang", language);
}

