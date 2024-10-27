fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=3fefb997a69d463fa328c1587fbfe7c1"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((currency) => {
    let amount = document.querySelector(".amount");
    let egpPrice = document.querySelector(".egp span");
    let sarPrice = document.querySelector(".sar span");

    egpPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"]);
    sarPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"]);

    console.log(currency.rates["EGP"]);
    console.log(currency.rates["SAR"]);
  });
