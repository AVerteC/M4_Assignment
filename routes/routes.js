import express from 'express'
import { getAllEmployees, getEmployee, createEmployeeView, createEmployee, updateEmployee, updateEmployeeView, deleteEmployee } from '../controllers/employees.js'
const router = express.Router()

router.route('/api/employees')
    .get(getAllEmployees)
    .post(createEmployee)

// router.route('/add')
//     .get(createEmployeeView)
//     .post(createEmployee)

// router.route('/update/:id')
//     .get(updateEmployeeView)
//     .patch(updateEmployee)

router.route('/api/employees/:id')
    .delete(deleteEmployee)
//     .get(getEmployee)
//     .patch(updateEmployee)
export default router

// browser only lets you test get requests
// use postman for post patch delete
// controller is code executed when route is detected