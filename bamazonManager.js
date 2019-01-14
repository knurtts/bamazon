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
    connection.query("SELECT * FROM products", 
    function(err, res) {
        console.log("All items in inventory:");
        for (let i = 0; i < res.length; i++) {
            console.log(`ID: ${res[i].id} | Name: ${res[i].product_name} | Department: ${res[i].department_name} | Price: ${res[i].price} | Quantity: ${res[i].stock_quantity}`);
        }
        connection.end();
    })
};

function lowInvenory() {
    connection.query("SELECT * FROM products WHERE stock_quantity <= 10",
    function(err, res) {
        console.log("These items have a quantity of 10 or less:");
        for (let i = 0; i < res.length; i++) {
            console.log(`ID: ${res[i].id} | Name: ${res[i].product_name} | Department: ${res[i].department_name} | Price: ${res[i].price} | Quantity: ${res[i].stock_quantity}`);
        }
        connection.end();
    })
    
};

function addInventory() {
    console.log("add to");
    
};

function newProduct() {
    console.log("add new");
    
};

start();