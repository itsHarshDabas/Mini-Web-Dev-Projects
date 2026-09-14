const express = require('express');
const router = express.Router();
let students = require('../data/students');

// GET /students
router.get('/', (req, res) => {
    res.status(200).json(students);
});

// GET /students/:id
router.get('/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ error: "Student Not Found" });
    }
    res.status(200).json(student);
});

// POST /students
router.post('/', (req, res) => {
    const { name, course } = req.body;
    if (!name || !course) {
        return res.status(400).json({ error: "Invalid Input" });
    }
    const newStudent = {
        id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
        name,
        course
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// PUT /students/:id
router.put('/:id', (req, res) => {
    const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
    if (studentIndex === -1) {
        return res.status(404).json({ error: "Student Not Found" });
    }
    const { name, course } = req.body;
    if (!name && !course) {
        return res.status(400).json({ error: "Invalid Input" });
    }
    if (name) students[studentIndex].name = name;
    if (course) students[studentIndex].course = course;
    
    res.status(200).json(students[studentIndex]);
});

// DELETE /students/:id
router.delete('/:id', (req, res) => {
    const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
    if (studentIndex === -1) {
        return res.status(404).json({ error: "Student Not Found" });
    }
    students.splice(studentIndex, 1);
    res.status(200).json({ message: "Student removed successfully" });
});

module.exports = router;
