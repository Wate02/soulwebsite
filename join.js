var copiedjavamsg = document.getElementById("copiedjavamsg");


copiedjavamsg.style.display = "none";

function copyjava() {
  copiedjavamsg.style.display = "block";
  setTimeout(function() {
    copiedjavamsg.style.display = "none";
  }, 3000); 
}

var copiedbedrockmsg = document.getElementById("copiedbedrockmsg");


copiedbedrockmsg.style.display = "none";

function copybedrock() {
  copiedbedrockmsg.style.display = "block";
  setTimeout(function() {
    copiedbedrockmsg.style.display = "none";
  }, 3000);
}


function copyjava() {
  var javaip = "soul.smpmc.eu";
  navigator.clipboard.writeText(javaip)
}

function copybedrock() {
  var bedip = "bedrock";
  navigator.clipboard.writeText(bedip)
}