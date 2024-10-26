var flatFeePercentage = 0.0005;

function calculateHomelyFee() {
    var homePrice = parseFloat(document.getElementById("home-price").value);
    var homelyFee = homePrice * flatFeePercentage;
    
    var feeDisplay = document.getElementById("fee-display");
    feeDisplay.textContent = "Your Homely Service Fee: $" + homelyFee.toFixed(2);

    var feeClassElements = document.getElementsByClassName("fee-details");
    for (var i = 0; i < feeClassElements.length; i++) {
        feeClassElements[i].textContent = "Based on a home price of $" + homePrice;
    }

    var tagElements = document.getElementsByTagName("p");
    if (tagElements.length > 0) {
        tagElements[0].innerHTML = `<strong>Note:</strong> This fee is only an estimate.`;
    }

    var feeHighlight = document.querySelector(".fee-highlight");
    if (feeHighlight) {
        feeHighlight.innerHTML = `<em>Fee Calculated:</em> $${homelyFee.toFixed(2)}`;
    }
}
