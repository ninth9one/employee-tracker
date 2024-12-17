# Employee Tracker Content Management System

## Description
This command-line app allows business owners to effectively manage their company's employee database. Using Node.js, Inquirer, and PostgreSQL, it provides an interface to:
- View departments, roles, and employees.
- Add new departments, roles, and employees.
- Update existing employee roles.
- Perform additional functionality, such as viewing employees by department or manager, and calculating department budgets.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)


## Installation
Follow these steps to set up the application locally:

1. **Clone the repository:**
 - Clone from the github repo
2. **Install dependencies:**
  - npm install

3. **Set up PostgreSQL Database:**
  - CREATE DATABASE employee_db in psql
   or name the database whatever you'd like may need to alter the connections.js
  - Run the schema and seed files to set up tables and sample data:
   psql -U postgres -d employee_db -f schema.sql
   psql -U postgres -d employee_db -f seeds.sql
5. **Update Database Connection:**
   Modify the 'db/connection.js' file with your PostgreSQL credentials:
 const { Pool } = require('pg');

const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'database',
    password: 'password',});
    module.exports = pool;
    
## Usage
To launch the application:
run node index.js in the bash within the directory
You should see this:
$ node index.js
? What would you like to do? (Use arrow keys)
> View All Departments
  View All Roles
  View All Employees
  Add Department
  Add Role
  Add Employee
  Update Employee Role
(Move up and down to reveal more choices)

Follow the prompts to interact with the database.

## Features
- View Data:
   - View all departments, roles, and employees in formatted tables.
- Add Data:
   - Add new departments, roles, and employees.
- Update Roles:
   - Update an employee's role.
- Extended Features:
   - View employees by manager.
   - View employees by department.
   - Calculate the total utilized budget of a department.

---

## Technologies Used
- Node.js: JavaScript runtime for building server-side applications.
- inquirer: Command-line interface for user prompts.
- PostgreSQL: Relational database to store company data.
- pg: PostgreSQL client for Node.js.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request.


## License
This project is licensed under the [MIT License](LICENSE).

---

## Questions
For questions contact:
- Name: Christopher Longsworth
- GitHub:[ninth9one](https://github.com/ninth9one)
- Email: your- crlongsworth0@gmail.com
