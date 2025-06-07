import { request } from 'express'
import Employee from '../models/Employee.js'

const getAllEmployees = async (request, response) => {
    try {
        const employees = await Employee.find({})
        response.status(200).json({ employees, count: employees.length })
        // response.status(200).json({employees})
        // response.render('index', {
        //     title: 'Home',
        //     employees,
        //     message: request.flash('message')
        // })
        // Can only add response once
        // response.send('Get all employees')
    } catch (err) {
        console.log(err)
        response.status(500).json({ msg: err })
    }

}

const getEmployee = async (request, response) => {
    try {
        let { id: employeeId } = request.params
        const employee = await Employee.findOne({ _id: employeeId })
        if (!employee) {
            return response.status(404).json({ msg: `No employee with ID ${employeeId} found.` })
        }
        response.status(200).json({ employee })
        // response.send('Get a single employee')
    } catch (err) {
        response.status(500).json({ msg: err })
    }
}
const createEmployeeView = async (request, response) => {
    response.render('add', {
        title: 'Add Employee',
        message: request.flash('message')
    })
}

const createEmployee = async (request, response) => {
    try {
        // const employee = await Employee.create({
        //     name: request.body.name,
        //     extension: request.body.extension,
        //     email: request.body.email,
        //     title: request.body.title
        // })
        const employee = await Employee.create(request.body)
        response.status(201).json({ employee })
        // request.flash('message', 'Employee added successfully')
        // response.redirect('/add')
        // response.status(201).json({msg: 'Employee added successfully.'})
        // response.send('Create a new employee')
    } catch (err) {
        console.log(err)
        response.status(500).json({ msg: err })
    }
}

const updateEmployeeView = async (request, response) => {
    try {
        let { id: employeeId } = request.params
        const employee = await Employee.findOne({ _id: employeeId })
        if (!employee) {
            return response.status(404).json({ msg: `No employee with ID ${employeeId} found.` })
        }
        response.render('update', {
            title: 'Update Employee',
            employee,
            message: request.flash('message')
        })
        // response.status(200).json({ employee })
        // response.send('Get a single employee')
    } catch (err) {
        // console.log(err)
        response.status(500).json({ msg: err })
    }
}


const updateEmployee = async (request, response) => {
    // Why use Patch vs put in postman
    try {
        let { id: employeeId } = request.params
        const employee = await Employee.findOneAndUpdate({ _id: employeeId }, request.body, {
            new: true,
            runValidators: true
        })
        if (!employee) {
            return response.status(404).json({ msg: `No employee with id ${employeeId} found.` })
        }
        request.flash('message', 'Successfully updated employee')
        response.redirect('/update/', employeeId)
        // response.status(200).json({ msg: 'Successfully updated employee' })
        // response.send('Update an existing employees')
    } catch (err) {
        response.status(500).json({ msg: err })
    }
}



const deleteEmployee = async (request, response) => {
    try {
        let { id: employeeId } = request.params
        const employee = await Employee.findOneAndDelete({ _id: employeeId })
        if (!employee) {
            return response.status(404).json({ msg: `No employee with ID ${employeeId} found.` })
        }
        response.status(200).json({ msg: 'Employee successfully deleted' })
        // request.flash('message', 'Employee successfully deleted')
        // response.redirect('/')
        // response.send('Get a single employee')
    } catch (err) {
        response.status(500).json({ msg: err })
    }
    // response.send('Delete an employee')
}

export {
    getAllEmployees,
    getEmployee,
    createEmployeeView,
    createEmployee,
    updateEmployeeView,
    updateEmployee,
    deleteEmployee
}

// npm run dev