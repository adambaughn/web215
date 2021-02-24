function hoverBanner() {
  document.body.style.backgroundImage = "radial-gradient(#ADD8E6, #FFFFFF)";
}

function hoverMain() {
  document.body.style.backgroundImage = "radial-gradient(#FFFFFF, #ADD8E6)";
}

 $(document).ready(function() {
   $('#dynamiccontent').load('/about.html');

   $('#dynamiclinks a').click(function(e) {
     e.preventDefault();
     $("#dynamiccontent").load(e.target.href);
   })
 });






// function changeContent () {
//  if ($("a").attr("id") === "contract") {
    
//  }
//  else if ($("a").attr("id") === "introduction") {
    
// }
//  else if ($("a").attr("id") === "codeplay") {
    
//  }
//  else if ($("a").attr("id") === "asmarterwaytolearn") {
    
//  }
//  else {
    
//  }
//}
  
