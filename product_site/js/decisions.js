document.getElementById("eligibility-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const creditScore = parseInt(document.getElementById("credit-score").value);
    const income = parseInt(document.getElementById("income").value);
    const employmentStatus = document.getElementById("employment-status").value;

    const feedback = [];

    if (age < 18) {
        feedback.push("Age requirement not met.");
    }

    if (creditScore < 600) {
        feedback.push("Credit score requirement not met.");
    }

    if (income < 30000) {
        feedback.push("Income requirement not met.");
    }

    if (employmentStatus === "unemployed") {
        feedback.push("Employment status not met.");
    }
//Determining whether the user qualifies to join Homely if their age, credit score, income, and employment status are acceptable using the AND operator
//All the conditions must be true for the user to be eligible to join the platform
    const allCriteriaMet = (age >= 18 && creditScore >= 600 && income >= 30000 && employmentStatus === "employed");

    const resultsSection = document.getElementById("results");
    resultsSection.style.display = "block";

    const feedbackContainer = document.getElementById("feedback");
    feedbackContainer.innerHTML = "";

    if (allCriteriaMet) {
        feedback.push("Congratulations! You meet the eligibility criteria. To sign up for a Homely account, click <a href='homebuyer.html'>here</a>");
    }

    feedback.forEach(message => {
        const messageElement = document.createElement("p");
        messageElement.innerHTML = message;  // 
        feedbackContainer.appendChild(messageElement);
    });
});
