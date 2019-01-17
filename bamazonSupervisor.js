const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

function start() {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View Product Sales by Department",
                "Create New Department"
            ]
        }
    ]).then(function(answer) {
        if (answer.action === "View Product Sales by Department") {
            viewSales();
        } else if (answer.action === "Create New Department") {
            newDept();
        }
    });
}

function viewSales() {
    console.log("View all revenue.");
}

function newDept() {
    console.log("Make New Department");
}

start();