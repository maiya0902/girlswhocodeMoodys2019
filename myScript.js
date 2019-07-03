function myFunction() {
  var txt;
  if (confirm("Orcas are apex predators meaning that they are at the very top of the food chain. No other animal hunts orcas (humans excluded). Click OK to see some more orcas!")) {
    txt = "You pressed OK!";
    document.getElementById('gifImage').src='orcigiphy1.gif';
    document.getElementById('gifImage2').src='orcigiphy2.gif';
    document.getElementById('gifImage3').src='orcigiphy3.gif';
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
