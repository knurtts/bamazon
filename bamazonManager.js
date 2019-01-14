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
            case "Add New Product":
              inquirer.prompt([
                  {
                      type: "input",
                      name: "prodName",
                      message: "What is the name of your new product? ",
                  },
                  {
                      type: "list",
                      name: "dept",
                      message: "Pick a department for the product. ",
                      choices: [
                          "Legendary Items",
                          "Food",
                          "Apliances",
                          "Wiretap",
                          "Music",
                          "Dangerous Animals"
                      ]
                  },
                  {
                      type: "input",
                      name: "price",
                      message: "Set the price for the product."
                  },
                  {
                      type: "input",
                      name: "quantity",
                      message: "How many are you adding to the inventory?"
                  }
              ]).then(function(res) {
                newProduct(res);
              });
              break;
            case "Add to Inventory":
              inquirer.prompt([
                {
                    type: "input",
                    name: "product",
                    message: "Which product's quantity would you like to update?"
                },
                {
                    type: "input",
                    name: "quantity",
                    message: "What is the new quantity of this product?"
                }
            ]).then(function(res) {
                addInventory(res);
              })
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

function newProduct(res) {
    connection.query("INSERT INTO products SET ?",
    {
        product_name: res.prodName,
        department_name: res.dept,
        price: res.price,
        stock_quantity: res.quantity
    }, function(err, res) {
        if (err) throw err;
        console.log("Item added!");
    });   
};

function addInventory(res) {
    //res.product res.quantity
    connection.query("UPDATE products SET ? WHERE ?",
    [{
        stock_quantity: res.quantity
    },
    {
        product_name: res.product
    }],
    function(err, res) {
        if (err) throw err;
        console.log("Quantity updated!");
        connection.end();
    });
};

start();