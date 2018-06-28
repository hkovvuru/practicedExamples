const mongoose = require('mongoose')
// import mongoose from 'mongoose';
// create Schema instance
// const { Schema } = mongoose;

const Schema = mongoose.Schema;

// connecting to the mongodb database using mongoose
mongoose.connect('mongodb://localhost/testCaseDB', (err) => {
    if (err) throw err;
    console.log('Database connected successfully');
});
// create Schema and model
const employeeSchema = mongoose.Schema({
    name: {
        type: String,

    },
    college: {
        type: String,
    },
    department: {
        type: String,
    },
    emailId: {
        type: String,
    },
    phone: {
        type: Number,
    },
    address: {
        type: String,
    },
    gender: String,
    salary: Number,
    location: String,



});

// Creating Student reference variable for model
const Employee = mongoose.model('employees', employeeSchema);

// Exporting the Student Model
// export default Student;

module.exports = Employee;
