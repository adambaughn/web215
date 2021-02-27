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
    xhttp.open("GET", "asmarterwaytolearn", true);
    xhttp.send(null);
  } 


  


  
