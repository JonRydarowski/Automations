function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("clicky").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://maker.ifttt.com/trigger/three/with/key/mYzsy2X2R8crDRxvMX_ygk7AAHd_r4gjE1xks75MrJs", true);
  xhttp.send();
}