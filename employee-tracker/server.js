const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ilhanirem51",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

function manageEmployees() {
    inquirer
        .prompt([
            {
                name: "mainMenu",
                message: "What would you like to do?",
                type: "list",
                choices: [
                    "Add an Employee",
                    "View Employees",
                    "Remove an Employee",
                    "Exit",
                ],
            },
        ])
        .then((answer) => {
            switch (answer.manageEmployees) {
                case "Add an Employee":
                    addEmployee();
                    break;
                case "View Employee":
                    viewEmployee();
                    break;
                case "Remove an Employee":
                    removeEmployee();
                    break;
            }
        });
}

