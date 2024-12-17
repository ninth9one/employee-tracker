const inquirer = require('inquirer');
const db = require('./db/queries');

const menuOptions = async () => {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Exit',
            ],
        },
    ]);
console.log('chose what you would like to do');
    switch (action) {
        case 'View All Departments':
            console.table(await db.getDepartments());
            break;
        case 'View All Roles':
            const roles = await db.getRoles();
            console.table(roles);
            break;
        case 'View All Employees':
            console.table(await db.getEmployees());
            break;
        case 'Add Department':
            const { departmentName } = await inquirer.prompt([
                { type: 'input', name: 'departmentName', message: 'Enter department name:' },
            ]);
            await db.addDepartment(departmentName);
            console.log(`Added department: ${departmentName}`);
            break;
        case 'Add Role':
            const { title, salary, department_id } = await inquirer.prompt([
                { type: 'input', name: 'title', message: 'Enter role title:' },
                { type: 'input', name: 'salary', message: 'Enter role salary:' },
                { type: 'input', name: 'department_id', message: 'Enter department ID:' },
            ]);
            await db.addRole(title, salary, department_id);
            console.log(`Added role: ${title}`);
            break;
        case 'Add Employee':
            const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
                { type: 'input', name: 'first_name', message: 'Enter first name:' },
                { type: 'input', name: 'last_name', message: 'Enter last name:' },
                { type: 'input', name: 'role_id', message: 'Enter role ID:' },
                { type: 'input', name: 'manager_id', message: 'Enter manager ID (leave blank if none):', default: null },
            ]);
            await db.addEmployee(first_name, last_name, role_id, manager_id || null);
            console.log(`Added employee: ${first_name} ${last_name}`);
            break;
        case 'Update Employee Role':
            const { employee_id, new_role_id } = await inquirer.prompt([
                { type: 'input', name: 'employee_id', message: 'Enter employee ID to update:' },
                { type: 'input', name: 'new_role_id', message: 'Enter new role ID:' },
            ]);
            await db.updateEmployeeRole(employee_id, new_role_id);
            console.log(`Updated employee ID ${employee_id} to role ID ${new_role_id}`);
            break;
        case 'Exit':
            console.log('Exiting...');
            process.exit();
    }

    menuOptions();
};

menuOptions();