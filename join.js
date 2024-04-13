  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  var copiedjavamsg = document.getElementById("copiedjavamsg");


copiedjavamsg.style.display = "none";

function copyjava() {
  var javaip = "soul.smpmc.eu";
  navigator.clipboard.writeText(javaip)
  copiedjavamsg.style.display = "block";
  setTimeout(function() {
    copiedjavamsg.style.display = "none";
  }, 3000); 
}

var copiedbedrockmsg = document.getElementById("copiedbedrockmsg");


copiedbedrockmsg.style.display = "none";

function copybedrock() {
  var bedip = "bedrock";
  navigator.clipboard.writeText(bedip)
  copiedbedrockmsg.style.display = "block";
  setTimeout(function() {
    copiedbedrockmsg.style.display = "none";
  }, 3000);
}




