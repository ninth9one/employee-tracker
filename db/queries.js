const pool = require('./connection');

const getDepartments = async () => {
    const res = await pool.query('SELECT * FROM department');
    return res.rows;
};

const getRoles = async () => {
    const query = 'SELECT role.id, role.title, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id';
    const res = await pool.query(query);
    return res.rows;
};
const getEmployees = async () => {
    const query = `
        SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, m.first_name || ' ' || m.last_name AS manager
        FROM employee e
        JOIN role ON e.role_id = role.id
        JOIN department ON role.department_id = department.id
        LEFT JOIN employee m ON e.manager_id = m.id`;
    const res = await pool.query(query);
    return res.rows;
};
const addDepartment = async (name) => {
    const query = 'INSERT INTO department (name) VALUES ($1)';
    await pool.query(query, [name]);
};

const addRole = async (title, salary, department_id) => {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)';
    await pool.query(query, [title, salary, department_id]);
};

const addEmployee = async (first_name, last_name, role_id, manager_id) => {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
    await pool.query(query, [first_name, last_name, role_id, manager_id]);
};

const updateEmployeeRole = async (employee_id, role_id) => {
    const query = 'UPDATE employee SET role_id = $1 WHERE id = $2';
    await pool.query(query, [role_id, employee_id]);
};

module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
};