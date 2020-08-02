const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ilhanirem51",
    database: "employees_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    manageEmployees();
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
                    "View Employee",
                    "Update an Employee",
                    "Add a Role",
                    "Add a Department",
                    "View Department",
                    "Exit",
                ],
            },
        ])
        .then((answer) => {
            switch (answer.mainMenu) {
                case "Add an Employee":
                    addEmployee();
                    break;
                case "View Employee":
                    viewEmployee();
                    break;
                case "Update an Employee":
                    updateEmployee();
                    break;
                case "Add a Role":
                    addRole();
                    break;
                case "Add a Department":
                    addDepartment();
                    break;
                case "View Department":
                    viewDepartment();
                    break;
                default:
                    connection.end();
                    process.exit();
            }
        });
}
function viewEmployee() {
    connection.query("SELECT * FROM employee", (err, results) =>{
        console.table(results)
        manageEmployees();
    })
}

function addEmployee() {
    inquirer
        .prompt([
            {
                name: "firstName",
                message: "What is your first name?",
                type: "input"
            },
            {
                name: "lastName",
                message: "What is your last name?",
                type: "input"
            },
            {
                name: "roleID",
                message: "What is your role ID?",
                type: "input"
            },
            {
                name: "managerID",
                message: "What is your manager ID?",
                type: "input"
            },
        ])
        //The placeholders can be replaced with the input
        //Double question marks: table names or column names
        .then((answer) => {
            connection.query("INSERT into employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], (err)=> {
               console.log("New employee has been added")
               manageEmployees()
            } )
        })
}