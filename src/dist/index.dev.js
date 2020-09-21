"use strict";

require("./style.css");

var form = document.querySelector(".form-quizz");
var tabResults = ["b", "a", "a", "c", "b"];
var results = document.querySelector(".results");
var tabReponsesUser = [];
var nbFautes = 0;
form.addEventListener("submit", function (e) {
  e.preventDefault();

  for (var i = 1; i < 6; i++) {
    tabReponsesUser.push(document.querySelector("input[name=\"q".concat(i, "\"]:checked")).value);
  }

  verifResults();
});

function verifResults() {
  console.log("Results : ", tabResults);
  console.log("User : ", tabReponsesUser);

  for (var i = 0; i < 6; i++) {
    if (tabReponsesUser[i] != tabResults[i]) {
      nbFautes += 1;
    }
  }

  console.log(nbFautes);
  displayResults(nbFautes);
}

function displayResults(fautes) {
  console.log("displayresults");

  switch (fautes) {
    case 0:
      results.innerHTML = "Bravo ! Aucune faute ! 👑 ";
      break;

    case 1:
      results.innerHTML = "On y est presque ! 1 faute ! 😃";
      break;

    case 2:
      results.innerHTML = "Pas mal ! 2 faute ! 🙂";
      break;

    case 3:
      results.innerHTML = "3 fautes ! Tu peux mieux faire ! 💪";
      break;

    case 4:
      results.innerHTML = "4 fautes ! C'est pas terrible... 👎";
      break;

    case 5:
      results.innerHTML = "5 fautes ! Tu n'as pas honte ? 💩";
      break;
  }

  window.scrollTo({
    top: 1000,
    left: 0,
    behavior: "smooth"
  });
  setTimeout(function () {
    location.reload();
  }, '4000');
}