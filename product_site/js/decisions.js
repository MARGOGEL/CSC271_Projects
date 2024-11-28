document.getElementById("eligibility-form").addEventListener("submit", function(event) {
    event.preventDefault();

    //I finished this late and didn't get to submit to Brightspace
    //If you're seeing this, I finished it anyway and added it my product_site_v8 branch
    const age = parseInt(document.getElementById("age").value);
    const creditScore = parseInt(document.getElementById("credit-score").value);
    const income = parseInt(document.getElementById("income").value);
    const employmentStatus = document.getElementById("employment-status").value;

    const feedback = [];
    feedback.push(validateAge(age));
    feedback.push(validateCreditScore(creditScore));
    feedback.push(validateIncome(income));
    feedback.push(validateEmploymentStatus(employmentStatus));

    const allCriteriaMet = checkAllCriteria(age, creditScore, income, employmentStatus);

    const resultsSection = document.getElementById("results");
    resultsSection.style.display = "block";

    const feedbackContainer = document.getElementById("feedback");
    feedbackContainer.innerHTML = "";

    if (allCriteriaMet) {
        feedback.push("Congratulations! You meet the eligibility criteria. To sign up for a Homely account, click <a href='homebuyer.html'>here</a>");
    }
    
    displayFeedback(feedback);
});

function validateAge(age) {
    return age < 18 ? "Age requirement not met." : "";
}

function validateCreditScore(creditScore) {
    return creditScore < 600 ? "Credit score requirement not met." : "";
}

function validateIncome(income) {
    return income < 30000 ? "Income requirement not met." : "";
}

function validateEmploymentStatus(employmentStatus) {
    return employmentStatus === "unemployed" ? "Employment status not met." : "";
}

function checkAllCriteria(age, creditScore, income, employmentStatus) {
    return age >= 18 && creditScore >= 600 && income >= 30000 && employmentStatus === "employed";
}

function displayFeedback(feedback) {
    const feedbackContainer = document.getElementById("feedback");
    let feedbackMessages = '';

    feedback.forEach(message => {
        if (message !== '') {
            feedbackMessages += message;
        }
    });

    feedbackContainer.innerHTML = feedbackMessages;
}