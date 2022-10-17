const express = require('express')
const router = express.Router()
const Employee = require('../model/EmployeeModelFile')

// Post Method
router.post('/emp/employees', async (req, res) => {
    const employee = new Employee({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        salary: req.body.salary
    })

    try {
        const savedEmployee = await employee.save()
        res.status(201).send(savedEmployee)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Get Method
router.get('/emp/employees/:employeeID', async (req, res) => {
    try {
        const employees = await Employee.find()
        res.status(200).json(employees)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.put('/emp/employees/:employeeID', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeID)
        if (employee == null) {
            return res.status(404).json({message: 'Cannot find employee'})
        }
        if (req.body.first_name != null) {
            employee.first_name = req.body.first_name
        }
        if (req.body.last_name != null) {
            employee.last_name = req.body.last_name
        }
        if (req.body.email != null) {
            employee.email = req.body.email
        }
        if (req.body.gender != null) {
            employee.gender = req.body.gender
        }
        if (req.body.salary != null) {
            employee.salary = req.body.salary
        }
        const updatedEmployee = await employee.save()
        res.status(200).json(updatedEmployee)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/emp/employees/:employeeID', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeID)
        if (employee == null) {
            return res.status(404).json({message: 'Cannot find employee'})
        }
        await employee.remove()
        res.status(200).json({message: 'Deleted employee'})
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router