

var getChange = function () {
  var twoThousandNote = 0;
  var fiveHundredNote = 0;
  var oneHundredNote = 0;
  var twentyNote = 0;
  var tenNote = 0;
  var fiveNote = 0;
  var oneNote = 0;

  var billAmount = document.getElementById("billAmount").value;
  var cashAmount = document.getElementById("cashAmount").value;
  document.getElementById("showMessage").innerHTML = "";
  var changeAmount = cashAmount - billAmount;
  document.getElementsByClassName("main-container")[0].style.display =
  "none";

  if(!(billAmount < 0)){
  if (changeAmount == 0) {
    document.getElementById("showMessage").innerHTML =
      "We Don't Owe You Anything";
  } else if (changeAmount <= 0) {
    document.getElementById("showMessage").innerHTML =
      "Are you Trying to rob me man? Give Me More";
  } else {
    while (changeAmount >= "2000") {
      changeAmount = changeAmount - 2000;
      twoThousandNote++;
    }

    while (changeAmount >= "500") {
      changeAmount = changeAmount - 500;
      fiveHundredNote++;
    }

    while (changeAmount >= "100") {
      changeAmount = changeAmount - 100;
      oneHundredNote++;
    }
    while (changeAmount >= "20") {
      changeAmount = changeAmount - 20;
      twentyNote++;
    }
    while (changeAmount >= "10") {
      changeAmount = changeAmount - 10;
      tenNote++;
    }
    while (changeAmount >= "5") {
      changeAmount = changeAmount - 5;
      fiveNote++;
    }
    while (changeAmount >= "1") {
      changeAmount = changeAmount - 1;
      oneNote++;
    }

    document.getElementById("twoThousandNote").innerHTML = twoThousandNote;
    document.getElementById("fiveHundredNote").innerHTML = fiveHundredNote;
    document.getElementById("oneHundredNote").innerHTML = oneHundredNote;
    document.getElementById("twentyNote").innerHTML = twentyNote;
    document.getElementById("tenNote").innerHTML = tenNote;
    document.getElementById("fiveNote").innerHTML = fiveNote;
    document.getElementById("oneNote").innerHTML = oneNote;

    document.getElementsByClassName("main-container")[0].style.display =
      "block";
    document.getElementsByClassName("cash-counter")[0].style.animation =
      "openCounter 2s linear forwards 1s";
  }
}
else{
  document.getElementById("showMessage").innerHTML =
      `Looks Like Negative Value Which Can't Be P ossible`;
}
};
