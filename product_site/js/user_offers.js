let selectedOffers = [];

function generateRecommendedLoans() {
    const homePrice = parseFloat(document.getElementById("home-price").value);
    const userRate = parseFloat(document.getElementById("user-interest-rate").value);
    const loanTerm = parseInt(document.getElementById("loan-term").value);
    const creditScore = parseInt(document.getElementById("credit-score").value);

    if (!homePrice || !userRate || !loanTerm || !creditScore || creditScore < 300 || creditScore > 850) {
        document.getElementById("offers-container").textContent = "Please enter all fields correctly.";
        return;
    }

    const lenders = [
        { name: "Lender A", rateAdjustment: -0.5 },
        { name: "Lender B", rateAdjustment: 0.2 },
        { name: "Lender C", rateAdjustment: -0.1 }
    ];

    const container = document.getElementById("offers-container");
    container.innerHTML = "";

    lenders.forEach(lender => {
        const lenderRate = (userRate + lender.rateAdjustment) / 100 / 12;
        const monthlyPayment = calculatePayment(homePrice, lenderRate, loanTerm);

        const offerDiv = document.createElement("div");
        offerDiv.className = "offer";
        offerDiv.innerHTML = `
            <strong>${lender.name}</strong><br>
            Interest Rate: ${(lenderRate * 12 * 100).toFixed(2)}%<br>
            Term: ${loanTerm} years<br>
            Monthly Payment: $${monthlyPayment.toFixed(2)}<br>
            Credit Score Requirement: ${creditScore}+
        `;

        const compareBtn = createButton("Compare", () => compareOffer(lender.name, lenderRate, monthlyPayment));
        const inquireBtn = createButton("Inquire", () => alert(`Inquiry sent to ${lender.name}.`));

        offerDiv.appendChild(compareBtn);
        offerDiv.appendChild(inquireBtn);
        container.appendChild(offerDiv);
    });
}

function calculatePayment(price, rate, termYears) {
    const termMonths = termYears * 12;
    return (price * rate * Math.pow(1 + rate, termMonths)) / (Math.pow(1 + rate, termMonths) - 1);
}

function createButton(text, action) {
    const button = document.createElement("button");
    button.textContent = text;
    button.className = "action-button";
    button.onclick = action;
    return button;
}

function compareOffer(name, rate, payment) {
    selectedOffers.push({ name, rate: (rate * 12 * 100).toFixed(2), payment: payment.toFixed(2) });

    if (selectedOffers.length === 2) {
        showComparison();
        selectedOffers = [];
    } else {
        alert(`Selected ${name}. Select one more offer to compare.`);
    }
}

function showComparison() {
    const comparison = document.createElement("div");
    comparison.className = "comparison-info";
    comparison.innerHTML = "<h3>Comparison</h3>" +
        selectedOffers.map(offer => `<p>${offer.name}: ${offer.rate}% | $${offer.payment} per month</p>`).join("");
    document.getElementById("offers-container").appendChild(comparison);
}
