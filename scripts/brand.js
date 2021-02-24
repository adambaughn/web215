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
    xhttp.open("GET", "xmlhttp_info.txt", true);
    xhttp.send();
  } 
    else if ($("a").attr("id") === "introduction") {
    xhttp.open("GET", "introduction", true);
    xhttp.send();
  } 
    else if ($("a").attr("id") === "codeplay") {
    xhttp.open("GET", "codeplay.txt", true);
    xhttp.send();
  } 
    else if ($("a").attr("id") === "asmarterwaytolearn") {
    xhttp.open("GET", "asmarterwaytolearn.txt", true);
    xhttp.send();
  } 
    else {
    xhttp.open("GET", "placeholder.txt.txt", true);
    xhttp.send();
}


  
