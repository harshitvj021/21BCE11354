const express = require('express');
const router = express.Router();

router.post('/bfhl', (req, res) =>{
    const data = req.body.data;
    const fullName = "Harshit_Singh";
    const dob = "21012003"; 
    const user_id = `${fullName}_${dob}`;
    const email = "harshitsingh_2021@vitbhopal.ac.in";
    const roll_number = "21BCE11354";

    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (item === item.toLowerCase() && item > highestLowercase) {
                highestLowercase = item;
            }
        }
    });

    const response = {
        "is_success": true,
        "user_id": user_id,
        "email": email,
        "roll_number": roll_number,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highestLowercase ? [highestLowercase] : []
    };
    res.json(response);
});

router.get('/bfhl', (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

module.exports = router;
