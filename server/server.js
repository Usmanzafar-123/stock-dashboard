
const express = require("express");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Store stock data from CSV
let stockData = {};

// Read stock data from dump.csv and process it
fs.createReadStream(path.join(__dirname, "../data/dump.csv"))
    .pipe(csv())
    .on("data", (row) => {
        const company = row["index_name"]; // Ensure this matches your CSV column name
        if (!stockData[company]) stockData[company] = [];

        stockData[company].push({
            Date: row["index_date"], // Ensure this matches your CSV column name
            Price: parseFloat(row["closing_index_value"]), // Ensure this matches your CSV column name
        });
    })
    .on("end", () => {
        console.log("CSV file processed successfully.");
    });

// API to fetch the list of companies
app.get("/companies", (req, res) => {
    res.json(Object.keys(stockData));
});

// API to fetch stock data for a specific company
app.get("/company/:name", (req, res) => {
    const company = req.params.name;
    res.json(stockData[company] || []);
});

// Serve frontend files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

