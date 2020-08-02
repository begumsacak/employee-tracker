INSERT into department (name) VALUES ("Human Resources"), ("Finance"), ("Marketing");

INSERT into role (title, salary, department_id) VALUES ("Manager", 10000.00, 1), 
("Human Resources Specialist", 50000.00, 2),
 ("Human Resources Analyst", 30000.00, 2),
 ("Marketing Specialist", 50000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Smith", 1, 1), ("Mary", "Williams", 2, null), ("Robert", "Miller", 3, null), ("Michael", "Davis", 4, null);