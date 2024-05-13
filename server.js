const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(express.json());
app.use(cors())
app.post('/saveData', (req, res) => {
    let data = req.body.data;
    let timestamp = req.body.timestamp;
    let line = `${timestamp} - X: ${data.x}, Y: ${data.y}\n`;
    fs.appendFile('output.txt', line, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving data to output.txt');
        } else {
            console.log('Data saved to output.txt');
            res.send('Data saved successfully');
        }
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
