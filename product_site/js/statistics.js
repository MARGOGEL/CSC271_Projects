//Creating an array for data that is from the first 5 months in the year
//This is placeholder data essentially, since there isn't any actual data to calculate
const mortgageStatistics = [
    { month: 'January', applications: 150 },
    { month: 'February', applications: 200 },
    { month: 'March', applications: 180 },
    { month: 'April', applications: 220 },
    { month: 'May', applications: 175 }
];

const statisticsList = document.getElementById('statistics-list');

//Looping through the mortgage stats array using a for loop
for (let i = 0; i < mortgageStatistics.length; i++) {
    const stat = mortgageStatistics[i];
    const listItem = document.createElement('li');
    listItem.textContent = `${stat.month}: ${stat.applications} applications`;
    statisticsList.appendChild(listItem);
}

let totalApplications = 0;
let index = 0;

while (index < mortgageStatistics.length) {
    totalApplications += mortgageStatistics[index].applications;
    index++;
}

// Displaying the total number of Homely applications (not actual)  made during each month, in summary format
const summary = document.getElementById('summary');
summary.textContent = `Total Applications Over the Last 5 Months: ${totalApplications}`;

// Loop through the NodeList of features and manipulating each element
const featureElements = document.querySelectorAll('.feature');

//We define our descriptions of other notable Homely features here
if (featureElements.length > 0) {
    const featureDescriptions = [
        "Competitive interest rates to save you money.",
        "Flexible payment options to suit your budget.",
        "Quick and easy approval process for your convenience."
    ];

    featureElements.forEach((feature, index) => {
        if (index < featureDescriptions.length) {
            feature.textContent = featureDescriptions[index];
        }
    });
}
