var btn = document.querySelector("button");
var price = document.querySelector("#price");

btn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
      var usd = data.bpi.USD.rate;
      var eur = data.bpi.EUR.rate;
      var gbp = data.bpi.GBP.rate;
      price.innerHTML = "$" + usd;
    }
  }
  
  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
  
  
});