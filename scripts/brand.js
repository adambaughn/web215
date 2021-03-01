function hoverBanner() {
  document.body.style.backgroundImage = "radial-gradient(#ADD8E6, #FFFFFF)";
}

function hoverMain() {
  document.body.style.backgroundImage = "radial-gradient(#FFFFFF, #ADD8E6)";
}

var xhttp = new XMLHttpRequest();

function loadIntroduction() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamiccontent').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "introduction_two.html", true);
    xhttp.send(null);
  } 

function loadContract() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamiccontent').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "contract_two.html", true);
    xhttp.send(null);
  } 


function loadBrand() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamiccontent').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "brand_two.html", true);
    xhttp.send(null);
  } 


function loadCodeplay() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamiccontent').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "codeplay.html", true);
    xhttp.send(null);
  } 

function loadAsmarterWayToLearn() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamiccontent').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "asmarterwaytolearn.html", true);
    xhttp.send(null);
  } 

function showFunctionOne() {
var x = document.getElementById("click_one");
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showFunctionTwo() {
var x = document.getElementById("click_two");
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showFunctionThree() {
var x = document.getElementById("click_three");
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showFunctionFour() {
var x = document.getElementById("click_four");
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showFunctionFive() {
var x = document.getElementById("click_five");
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showFunctionSix() {
var x = document.getElementById("click_six");
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showFunctionSeven() {
var x = document.getElementById("click_seven");
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showFunctionEight() {
var x = document.getElementById("click_eight");
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showFunctionNine() {
var x = document.getElementById("click_nine");
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showFunctionTen() {
var x = document.getElementById("click_ten");
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
