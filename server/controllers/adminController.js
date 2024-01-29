// controllers/adminController.js
const User = require('../models/User');

const addFaculty = async (req, res) => {
    try {
        const { email, password, timetable } = req.body;

        // Create a new user
        const newUser = new User({
            email,
            password,
            timetable,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'Faculty added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { addFaculty };