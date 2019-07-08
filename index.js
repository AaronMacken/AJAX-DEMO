var btn = document.querySelector("button");
var price = document.querySelector("#price");

// Old way with XHR

// btn.addEventListener("click", function() {
//   var XHR = new XMLHttpRequest();

//   XHR.onreadystatechange = function() {
//     if(XHR.readyState == 4 && XHR.status == 200) {
//       var data = JSON.parse(XHR.responseText);
//       var usd = data.bpi.USD.rate;
//       var eur = data.bpi.EUR.rate;
//       var gbp = data.bpi.GBP.rate;
//       price.innerHTML = "$" + usd;
//     }
//   }

//   XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
//   XHR.send();

// });

// New way with fetch

var URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

btn.addEventListener("click", function() {
  // perform a get request using fetch & the given url
  fetch(URL)
  // first check for errors
    .then(handleErrors)
    // if last statement is cleared, return the promise object as json
    .then(function(response) {
      console.log("Everything is fine.");
      return response.json();
    })
    // then use the json to load in the data we want from the fetch api request
    .then(function(data) {
      console.log(data.bpi.USD.rate);
      price.innerHTML = ("$" + data.bpi.USD.rate);
    })
    // catch block to write error message to the console.
    .catch(function(error) {
      console.log(error);
    })
});


// This fn is used to handle any type of status error
function handleErrors(request) {
  if(!request.ok) {
    throw Error(request.status);
  }
  return request;
}
