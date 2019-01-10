const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host:"127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

function start() {
    inquirer.prompt([
        {
            type: "list",
            name: "job",
            message: "Menu Options:",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Product"
            ]
        }
    ]).then(function(sel) {
        switch (sel.job) {
            case "View Products for Sale":
              getProducts();
              break;
            case "View Low Inventory":
              lowInvenory();
              break;
            case "Add to Inventory":
              addInventory();
              break;
            case "Add New Product":
              newProduct();
              break;
        }
    });
};

function getProducts() {
    console.log("get all");
    
};

function lowInvenory() {
    console.log("get low");
    
};

function addInventory() {
    console.log("add to");
    
};

function newProduct() {
    console.log("add new");
    
};

start();