function hoverBanner() {
  document.body.style.backgroundImage = "radial-gradient(#ADD8E6, #FFFFFF)";
}

function hoverMain() {
  document.body.style.backgroundImage = "radial-gradient(#FFFFFF, #ADD8E6)";
}

function loadIntroduction() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if (xhhtp.status == 200) {
      document.getElementById('dynamiccontent').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "introduction_two.html", true);
    xhttp.send(null);
  } 

function loadContract() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if (xhhtp.status == 200) {
      document.getElementById('dynamiccontent').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "contract_two.html", true);
    xhttp.send(null);
  } 


function loadBrand() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if (xhhtp.status == 200) {
      document.getElementById('dynamiccontent').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "brand_two.html", true);
    xhttp.send(null);
  } 


function loadCodeplay() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if (xhhtp.status == 200) {
      document.getElementById('dynamiccontent').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "codeplay_two.html", true);
    xhttp.send(null);
  } 

function loadAsmarterWayToLearn() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if (xhhtp.status == 200) {
      document.getElementById('dynamiccontent').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "asmarterwaytolearn_two.html", true);
    xhttp.send(null);
  } 


  


  
