function generateRecommendedLoans() {
    let homePrice = parseFloat(document.getElementById("home-price").value);
    let userInterestRate = parseFloat(document.getElementById("user-interest-rate").value);
    let loanTerm = parseInt(document.getElementById("loan-term").value);
    let creditScore = parseInt(document.getElementById("credit-score").value);
  
    if (isNaN(homePrice) || isNaN(userInterestRate) || isNaN(loanTerm) || isNaN(creditScore) || creditScore < 300 || creditScore > 850) {
      document.getElementById("offers-container").textContent = "Please enter all fields correctly.";
      return;
    }
  
    let interestRate = userInterestRate / 100 / 12;
    let loanTermMonths = loanTerm * 12;
  
    const lenders = [
      { name: "Lender A", rateAdjustment: -0.5 },
      { name: "Lender B", rateAdjustment: 0.2 },
      { name: "Lender C", rateAdjustment: -0.1 }
    ];
  
    document.getElementById("offers-container").innerHTML = "";
  
    lenders.forEach(lender => {
      let lenderRate = (userInterestRate + lender.rateAdjustment) / 100 / 12;
      if (Math.abs(lenderRate - interestRate) > 0.01) return;
  
      let monthlyPayment = (homePrice * lenderRate * Math.pow(1 + lenderRate, loanTermMonths)) / (Math.pow(1 + lenderRate, loanTermMonths) - 1);
  
      let offerDiv = document.createElement("div");
      offerDiv.classList.add("offer");
  
      offerDiv.innerHTML = `
        <strong>${lender.name}</strong><br>
        Interest Rate: ${(lenderRate * 100 * 12).toFixed(2)}%<br>
        Term: ${loanTerm} years<br>
        Monthly Payment: $${monthlyPayment.toFixed(2)}<br>
        Credit Score Requirement: ${creditScore}+
      `;
  
      let compareButton = document.createElement("button");
      compareButton.classList.add("compare-button");
      compareButton.textContent = "Compare";
      compareButton.onclick = () => compareOffers(lender, lenderRate, monthlyPayment);
  
      offerDiv.appendChild(compareButton);
      document.getElementById("offers-container").appendChild(offerDiv);
    });
  }
  
  function compareOffers(selectedLender, selectedRate, selectedPayment) {
    const offers = document.querySelectorAll(".offer");
  
    offers.forEach((offer, index) => {
      const isSelected = offer.querySelector("strong").textContent === selectedLender.name;
      offer.style.border = isSelected ? "2px solid #007bff" : "1px solid #ddd";
      offer.style.backgroundColor = isSelected ? "#e0f0ff" : "#f9f9f9";
    });
  
    document.getElementById("offers-container").insertAdjacentHTML("beforeend", `
      <div class="comparison-info">
        <p>Comparing ${selectedLender.name} with an interest rate of ${(selectedRate * 100 * 12).toFixed(2)}% and monthly payment of $${selectedPayment.toFixed(2)}.</p>
      </div>
    `);
  }
  