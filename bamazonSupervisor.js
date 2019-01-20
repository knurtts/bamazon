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
    console.log("View all profits.");
    //use a JOIN query to bring over_head_costs from departments together with product_sales from products table
    connection.query("SELECT products.product_sales, products.department_name, departments.department_name, departments.over_head_costs FROM bamazon INNER JOIN products ON departments.department_name=products.department_name;",
    function(err, res) {
        console.log(res);
        connection.end();
    })
        //Add product_sales numbers together where the department is the same
    //create new alias for total_profit which = product_sales - over_head_costs
    //Display, using table npm, | Dept ID | Dept Name | Over head | Sales | Total Profit |

}

function newDept() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the new department? "
        },
        {
            type: "input",
            name: "overHead",
            message: "What is the over head cost for the department? "
        }
    ]).then(function(res) {
        connection.query("INSERT INTO departments SET ?", 
        {
            department_name: res.name,
            over_head_costs: res.overHead
        }, function(err, result) {
            if (err) throw err;
            console.log("Department added.");
            connection.end();
        });
    });
}

start();