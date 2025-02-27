# 📈 Stock Dashboard

A web-based **Stock Data Visualizer Dashboard** that allows users to search for stock indices and view their price trends in an interactive chart. 
The backend processes stock data from a CSV file and serves it through APIs, while the frontend visualizes the data using **Chart.js**.

---

## 🚀 Features
- 🔍 **Searchable Company List**: Filter and select companies dynamically.
- 📊 **Interactive Stock Charts**: View stock price trends using **Chart.js**.
- 🔄 **Real-time Data Fetching**: Retrieves data from the backend dynamically.
- 📂 **CSV Data Processing**: Reads and serves stock data from `dump.csv`.
- 🌐 **REST API Support**: Fetch company lists and stock data through APIs.
- 🎨 **Responsive Design**: Works on both desktop and mobile.

---

## 🛠 Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Chart.js
- **Backend**: Node.js, Express.js
- **Data Processing**: `csv-parser` (for reading CSV files)
- **REST API**: Express.js for serving data
- **Styling**: Custom CSS & Bootstrap

---

  ## 🚀 Setup Instructions  

1️⃣ Clone the Repository  

-git clone https://github.com/Usmanzafar-123/stock-dashboard.git
-cd stock-dashboard

2️⃣ Install Dependencies

-npm install

4️⃣ Start the Server

-node server/server.js

4️⃣ Access the application

-http://localhost:5000

 ## Project Structure

 stock_dashboard/
│── data/
│   └── dump.csv       # CSV file containing stock data 
│
│── public/
│   ├── index.html     # Frontend UI
│   ├── style.css      # Custom CSS for styling
│   ├── script.js      # JavaScript for fetching data and rendering charts
│
│── server/
│   ├── server.js      # Node.js backend to serve API endpoints
│
│── package.json       # Node.js dependencies and scripts
│── README.md          # Project documentation
│── .gitignore         # Ignore node_modules and unnecessary files

