// Here we define our mortgage request constructor function, using borrowerName, amountRequested, propertyAddress, loanPurpose as relevant properties. This creates the object representing a mortgage request submitted on the platform.
function MortgageRequest(borrowerName, amountRequested, propertyAddress, loanPurpose, income, creditScore, employmentHistory) {
    this.borrowerName = borrowerName;
    this.amountRequested = amountRequested;
    this.propertyAddress = propertyAddress;
    this.loanPurpose = loanPurpose;
    this.income = income;
    this.creditScore = creditScore;
    this.employmentHistory = employmentHistory;
    this.notifications = [];

    // This function sends an inquiry notification when a lender requests more information from the borrower.
    this.sendInquiry = function () {
        const notification = `An inquiry email for the borrower for ${this.propertyAddress} has been sent a request for more information. Please wait at least 24-48 hours for a response.`;
        this.notifications.push(notification);
        return notification;
    };

    // This method extracts a borrower's loan request details, viewable on the lender's dashboard.
    this.getDetails = function () {
        return `${this.borrowerName} requested $${this.amountRequested.toLocaleString('en-US')} for a property at ${this.propertyAddress}. Purpose: ${this.loanPurpose}. Income: $${this.income.toLocaleString('en-US')}, Credit Score: ${this.creditScore}, Employment History: ${this.employmentHistory}.`;
    };
}

// Here we define two separate and arbitrary loan requests
const request1 = new MortgageRequest("Joe Momma", 300000, "123 Maple St, VA", "Home Purchase", 97500, 720, "2 Years at Amazon.");
const request2 = new MortgageRequest("Punxsutawney Phil", 2800000, "184 Upper Mountain Ave, NJ", "Home Renovation", 850000, 835, "20+ Years at Sequoia Capital");
const requests = [request1, request2];

// Here we define our function to load the loan requests into the lender dashboard dynamically.
function renderRequests() {
    const container = document.getElementById("mortgage-requests-container");
    container.innerHTML = "";

    requests.forEach((request, index) => {
        const requestDiv = document.createElement("div");
        requestDiv.className = "offer";
        // Using innerHTML to modify the page's content styling easier. This only applies to the specific containers I created earlier in the lender_page.html.
        requestDiv.innerHTML = `
            <strong>Borrower Name:</strong> ${request.borrowerName}<br>
            <strong>Amount Requested:</strong> $${request.amountRequested.toLocaleString('en-US')}<br>
            <strong>Property Address:</strong> ${request.propertyAddress}<br>
            <strong>Purpose:</strong> ${request.loanPurpose}<br>
            <strong>Income:</strong> $${request.income.toLocaleString('en-US')}<br>
            <strong>Credit Score:</strong> ${request.creditScore}<br>
            <strong>Employment History:</strong> ${request.employmentHistory}<br>
            <button class="compare-button" onclick="sendInquiry(${index})">Inquire More</button>
        `;

        container.appendChild(requestDiv);
    });
}

// Here we define the function to handle the inquiries sent from the lender dashboard.
function sendInquiry(index) {
    const notification = requests[index].sendInquiry();
    alert(notification); // This provides the lender with a notification on their screen that the inquiry request was delivered to the borrower. User will need to close the popup alert manually.
}

document.addEventListener("DOMContentLoaded", renderRequests);
