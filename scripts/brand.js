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
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/introduction_two.html", true);
    xhttp.send(null);
  } 

function loadContract() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/contract_two.html", true);
    xhttp.send(null);
  } 


function loadBrand() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/brand_two.html", true);
    xhttp.send(null);
  } 


function loadCodeplay() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/codeplay.html", true);
    xhttp.send(null);
  } 

function loadAsmarterWayToLearn() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/asmarterwaytolearn.html", true);
    xhttp.send(null);
  } 

function loadCertification() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/certification_check.html", true);
    xhttp.send(null);
  } 

function loadTribute() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/tribute.html", true);
    xhttp.send(null);
  } 

function loadSurvey() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/survey.html", true);
    xhttp.send(null);
  } 

function loadLanding() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/landing.html", true);
    xhttp.send(null);
  }

function loadTechnical() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/technical.html", true);
    xhttp.send(null);
  } 

function loadPortfolio() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/portfolio.html", true);
    xhttp.send(null);
  } 

function loadSprites() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/sprites.html", true);
    xhttp.send(null);
  } 

function loadCsv() {
  xhttp.onload = function() {
    if (xhttp.status == 200) {
      document.getElementById('dynamic_content').innerHTML = xhttp.responseText;
      /* Change starts here */
      CsvToHtmlTable.init({
            csv_path: "https://adambaughn.github.io/web215_adambaughn/data/test.csv",
            element: "table-container",
            allow_download: true,
            csv_options: {
                separator: ","
            },
            datatables_options: {
                paging: false
            }
        }); /* Change ends here */
    }
  };
    xhttp.open("GET", "https://adambaughn.github.io/web215_adambaughn/multi_page_sites/dynamic/csv_page.html", true);
    xhttp.send(null);
  } 

function showFunctionOne() {
var x = document.getElementById("click_one");
var buttonText = document.getElementById("click_item_one");
if (x.style.display === "none") {
    x.style.display = "block";
    buttonText.innerHTML = "Click to hide A Smarter Way to Learn JS Chapter 1";
  } else {
    x.style.display = "none";
    buttonText.innerHTML = "Click to show A Smarter Way to Learn JS Chapter 1 Results";
  }
}

function showFunctionTwo() {
var x = document.getElementById("click_two");
var buttonText = document.getElementById("click_item_two");  
if (x.style.display === "none") {
    x.style.display = "block";
    buttonText.innerHTML = "Click to hide A Smarter Way to Learn JS Chapter 2";
  } else {
    x.style.display = "none";
    buttonText.innerHTML = "Click to show A Smarter Way to Learn JS Chapter 2 Results";
  }
}

function showFunctionThree() {
var x = document.getElementById("click_three");
var buttonText = document.getElementById("click_item_three"); 
if (x.style.display === "none") {
    x.style.display = "block";
    buttonText.innerHTML = "Click to hide A Smarter Way to Learn JS Chapter 3";
  } else {
    x.style.display = "none";
    buttonText.innerHTML = "Click to show A Smarter Way to Learn JS Chapter 3 Results";
  }
}

function showFunctionFour() {
var x = document.getElementById("click_four");
var buttonText = document.getElementById("click_item_four");   
if (x.style.display === "none") {
    x.style.display = "block";
    buttonText.innerHTML = "Click to hide A Smarter Way to Learn JS Chapter 4";
  } else {
    x.style.display = "none";
    buttonText.innerHTML = "Click to show A Smarter Way to Learn JS Chapter 4 Results";
  }
}

function showFunctionFive() {
var x = document.getElementById("click_five");
var buttonText = document.getElementById("click_item_five");    
if (x.style.display === "none") {
    x.style.display = "block";
    buttonText.innerHTML = "Click to hide A Smarter Way to Learn JS Chapter 5";
  } else {
    x.style.display = "none";
    buttonText.innerHTML = "Click to show A Smarter Way to Learn JS Chapter 5 Results";
  }
}

function showFunctionSix() {
var x = document.getElementById("click_six");
var buttonText = document.getElementById("click_item_six");    
if (x.style.display === "none") {
    x.style.display = "block";
    buttonText.innerHTML = "Click to hide A Smarter Way to Learn JS Chapter 6";
  } else {
    x.style.display = "none";
    buttonText.innerHTML = "Click to show A Smarter Way to Learn JS Chapter 6 Results";
  }
}

function showFunctionSeven() {
var x = document.getElementById("click_seven");
var buttonText = document.getElementById("click_item_seven"); 
if (x.style.display === "none") {
    x.style.display = "block";
    buttonText.innerHTML = "Click to hide A Smarter Way to Learn JS Chapter 7";
  } else {
    x.style.display = "none";
    buttonText.innerHTML = "Click to show A Smarter Way to Learn JS Chapter 7 Results";
  }
}

function showFunctionEight() {
var x = document.getElementById("click_eight");
var buttonText = document.getElementById("click_item_eight"); 
if (x.style.display === "none") {
    x.style.display = "block";
    buttonText.innerHTML = "Click to hide A Smarter Way to Learn JS Chapter 8";
  } else {
    x.style.display = "none";
    buttonText.innerHTML = "Click to show A Smarter Way to Learn JS Chapter 8 Results";
  }
}

function showFunctionNine() {
var x = document.getElementById("click_nine");
var buttonText = document.getElementById("click_item_nine"); 
if (x.style.display === "none") {
    x.style.display = "block";
    buttonText.innerHTML = "Click to hide A Smarter Way to Learn JS Chapter 9";
  } else {
    x.style.display = "none";
    buttonText.innerHTML = "Click to show A Smarter Way to Learn JS Chapter 9 Results";
  }
}

function showFunctionTen() {
var x = document.getElementById("click_ten");
var buttonText = document.getElementById("click_item_ten"); 
if (x.style.display === "none") {
    x.style.display = "block";
    buttonText.innerHTML = "Click to hide A Smarter Way to Learn JS Chapter 10";
  } else {
    x.style.display = "none";
    buttonText.innerHTML = "Click to show A Smarter Way to Learn JS Chapter 10 Results";
  }
}

document.getElementById("animated_header_two").addEventListener("load", animatedHeader);

function animatedHeader() {
 document.getElementById("animated_header_two").style.animation = "fadein 5s 1";

document.getElementById("animated_header_two").style.animationDelay = "10s";
  
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
    document.getElementById("animated_header_three").style.fontSize = "30px";
  } else { document.getElementById("animated_header_three").style.fontSize = "400px";
  }
}


function csvToArray( strData, strDelimiter ){
        strDelimiter = (strDelimiter || ",");
        var objPattern = new RegExp(
            (
                "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
                "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
                "([^\"\\" + strDelimiter + "\\r\\n]*))"
            ),
            "gi"
            );
        var arrData = [[]];
        var arrMatches = null;
        while (arrMatches = objPattern.exec( strData )){
            var strMatchedDelimiter = arrMatches[ 1 ];
            if (
                strMatchedDelimiter.length &&
                strMatchedDelimiter !== strDelimiter
                ){
                arrData.push( [] );
            }
            var strMatchedValue;
            if (arrMatches[ 2 ]){
                strMatchedValue = arrMatches[ 2 ].replace(
                    new RegExp( "\"\"", "g" ),
                    "\""
                    );
            } else {
                strMatchedValue = arrMatches[ 3 ];
            }
            arrData[ arrData.length - 1 ].push( strMatchedValue );
        }
        return( arrData );
    }
