function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data) {
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, value);
  } else {
    alert("Choose Diffrent Currency");
  }
});

function convert(currency1, currency2, value) {
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
  )
    .then((val) => val.json())
    .then((val) => {
      console.log(Object.values(val.rates)[0]);
      ans.value = Object.values(val.rates)[0];
    });
}

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar() {
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel() {
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}

let calculate = document.querySelector('#calculate');

calculate.addEventListener('click', () => {
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let split = document.querySelector('#split').value;

    //validate
    if(totalBill === '' || tipPercent == 0 || split == 0){
        alert('Please enter values');
        return;
    }
    //calculate
    let total = (totalBill * tipPercent) / split;
    total = total.toFixed(2);
    
    document.getElementById('tip').innerHTML = total;



})
