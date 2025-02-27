

// document.addEventListener("DOMContentLoaded", async function () {
//     const companyList = document.getElementById("company-list");
//     const searchBox = document.getElementById("searchBox");
//     const ctx = document.getElementById("stockChart").getContext("2d");
//     let stockChart;

//     // Fetch company list
//     async function fetchCompanies() {
//         const response = await fetch("http://localhost:5000/companies");
//         const companies = await response.json();
//         companyList.innerHTML = "";

//         companies.forEach(company => {
//             let li = document.createElement("li");
//             li.textContent = company;
//             li.onclick = () => fetchStockData(company);
//             companyList.appendChild(li);
//         });
//     }

//     // Filter companies dynamically
//     function filterCompanies() {
//         let searchValue = searchBox.value.toLowerCase();
//         let items = companyList.getElementsByTagName("li");

//         for (let item of items) {
//             item.style.display = item.textContent.toLowerCase().includes(searchValue) ? "block" : "none";
//         }
//     }

//     // Fetch and display stock data
//     async function fetchStockData(company) {
//         const response = await fetch(`http://localhost:5000/company/${company}`);
//         const data = await response.json();

//         if (data.length === 0) {
//             alert("No stock data available for " + company);
//             return;
//         }

//         // Extract dates and prices
//         const dates = data.map(entry => entry.Date);
//         const prices = data.map(entry => entry.Price);

//         // Destroy previous chart instance
//         if (stockChart) {
//             stockChart.destroy();
//         }

//         // Render new chart
//         stockChart = new Chart(ctx, {
//             type: "line",
//             data: {
//                 labels: dates,
//                 datasets: [{
//                     label: `${company} Stock Prices`,
//                     data: prices,
//                     borderColor: "blue",
//                     backgroundColor: "rgba(0, 0, 255, 0.1)",
//                     fill: true
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 scales: {
//                     x: { title: { display: true, text: "Date" } },
//                     y: { title: { display: true, text: "Stock Price" } }
//                 }
//             }
//         });
//     }

//     searchBox.addEventListener("keyup", filterCompanies);
//     fetchCompanies();
// });


const API_BASE = "https://stock-dashboard-xuio.onrender.com/"; // Replace with your Render backend URL

document.addEventListener("DOMContentLoaded", async function () {
    const companyList = document.getElementById("company-list");
    const searchBox = document.getElementById("searchBox");
    const ctx = document.getElementById("stockChart").getContext("2d");
    let stockChart;

    // Fetch company list
    async function fetchCompanies() {
        const response = await fetch(`${API_BASE}/companies`);
        const companies = await response.json();
        companyList.innerHTML = "";

        companies.forEach(company => {
            let li = document.createElement("li");
            li.textContent = company;
            li.onclick = () => fetchStockData(company);
            companyList.appendChild(li);
        });
    }

    // Filter companies dynamically
    function filterCompanies() {
        let searchValue = searchBox.value.toLowerCase();
        let items = companyList.getElementsByTagName("li");

        for (let item of items) {
            item.style.display = item.textContent.toLowerCase().includes(searchValue) ? "block" : "none";
        }
    }

    // Fetch and display stock data
    async function fetchStockData(company) {
        const response = await fetch(`${API_BASE}/company/${company}`);
        const data = await response.json();

        if (data.length === 0) {
            alert("No stock data available for " + company);
            return;
        }

        // Extract dates and prices
        const dates = data.map(entry => entry.Date);
        const prices = data.map(entry => entry.Price);

        // Destroy previous chart instance
        if (stockChart) {
            stockChart.destroy();
        }

        // Render new chart
        stockChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: dates,
                datasets: [{
                    label: `${company} Stock Prices`,
                    data: prices,
                    borderColor: "blue",
                    backgroundColor: "rgba(0, 0, 255, 0.1)",
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: { title: { display: true, text: "Date" } },
                    y: { title: { display: true, text: "Stock Price" } }
                }
            }
        });
    }

    searchBox.addEventListener("keyup", filterCompanies);
    fetchCompanies();
});

