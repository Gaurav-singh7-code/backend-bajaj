// const express = require('express');
// const app = express();

// app.use(express.json());

// app.post('/bfhl', (req, res) => {
//     const { data } = req.body;

//     const numbers = data.filter(item => !isNaN(item));
//     const alphabets = data.filter(item => isNaN(item));

//     const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
//     const highestLowercaseAlphabet = lowercaseAlphabets.sort().slice(-1);

//     res.json({
//         is_success: true,
//         user_id: "gaurav_singh_18032003",
//         email: "gaurav.singh2021a@vitstudent.ac.in",
//         roll_number: "21BCE0379",
//         numbers,
//         alphabets,
//         highest_lowercase_alphabet: highestLowercaseAlphabet
//     });
// });

// app.get('/bfhl', (req, res) => {
//     res.status(200).json({ operation_code: 1 });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: 'Invalid input format'
        });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.sort().slice(-1);

    res.json({
        is_success: true,
        user_id: "gaurav_singh_18032003",
        email: "gaurav.singh2021a@vitstudent.ac.in",
        roll_number: "21BCE0379",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
