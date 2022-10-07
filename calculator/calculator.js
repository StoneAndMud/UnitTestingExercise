window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      console.log('clicked');
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amountIn = document.getElementById("loan-amount");
  let yearsIn = document.getElementById("loan-years");
  let rateIn = document.getElementById("loan-rate");
  amountIn.value = '1000';
  yearsIn.value = '10';
  rateIn.value = '6';
  let obj = {
    amount: amountIn.value,
    years: yearsIn.value,
    rate: rateIn.value,
  }

  calculateMonthlyPayment(getCurrentUIValues);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  let newMonthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(newMonthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = (values.rate/ 100) / 12;
  let n = values.years * 12;

  let numerator = p * i;
  let denominator = 1 - (1 + i) ** -n;
  let expectedMonthlyPayment = parseFloat(numerator / denominator).toFixed(2);
  return expectedMonthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPay = document.getElementById("monthly-payment");
  monthlyPay.innerText = `${expectedMonthlyPayment}`;
}
