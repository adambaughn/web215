function hoverBanner() {
  document.body.style.backgroundImage = "radial-gradient(#ADD8E6, #FFFFFF)";
}

function hoverMain() {
  document.body.style.backgroundImage = "radial-gradient(#FFFFFF, #ADD8E6)";
}

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("dynamiccontent").innerHTML =
      this.responseText;
    }
  };
  if ($("a").attr("id") === "contract") {
    xhttp.open("GET", "contract.html", true);
    xhttp.send();
  } 
  else if ($("a").attr("id") === "introduction") {
    xhttp.open("GET", "introduction.html", true);
    xhttp.send();
  } 
  else if ($("a").attr("id") === "brand") {
    xhttp.open("GET", "brand.html", true);
    xhttp.send();
  } 
  else if ($("a").attr("id") === "codeplay") {
    xhttp.open("GET", "codeplay.txt", true);
    xhttp.send();
  } 
  else if ($("a").attr("id") === "asmarterwaytolearn") {
    xhttp.open("GET", "asmarterwaytolearn.html", true);
    xhttp.send();
  } 
  else {
    xhttp.open("GET", "placeholder.txt", true);
    xhttp.send();
}


  
