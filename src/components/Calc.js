import React from "react";

// import styles
import "./Styles.css";
import "./Calc.css";

// import Components
import Header from "./Header";

// function to calculate payments called via form submit button
// using (event data) as arg
function calcPayments(e) {
  // Stop browser refreshing page on clicking submit
  e.preventDefault();

  // Get the form data - method via React docs
  const form = e.target;
  const formData = new FormData(form);

  // Convert Data object to JSON to gain access to values
  const formJson = Object.fromEntries(formData.entries());

  // With this JSON calc total and monthly repayment
  // fix to 2dp output
  let total = Math.round(formJson.total * 1.2).toFixed(2);
  let monthly = (total / formJson.months).toFixed(2);

  // Append elements innerText to show calcs (using full text again to clear any previous calcs)
  document.querySelector(
    "#totalPayment"
  ).innerText = `Total Payment = £ ${total}`;
  document.querySelector(
    "#monthlyPayment"
  ).innerText = `Monthly Payments = £ ${monthly}`;
}

// Form element calls {calcPayments} upon clicking submit button.
function Calc(props) {
  return (
    <div className="Calc">
      <Header />
      <div className="calcForm">
        <h2>Payment Calculator</h2>
        <form onSubmit={calcPayments}>
          <label>
            Cart Total £
            <input name="total" id="cartTotal" type="number" />
          </label>
          <br />
          <label>
            Months to pay over
            <input name="months" id="months" type="number" min="6" step="6" />
          </label>
          <br />
          <button type="submit">Calc</button>
        </form>
        <h3>Payment Calculations</h3>
        <h4 id="totalPayment">Total Payment = £ </h4>
        <h4 id="monthlyPayment">Monthly Payments = £ </h4>
      </div>
    </div>
  );
}

export default Calc;
