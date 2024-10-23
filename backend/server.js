const express = require('express');
const { exec } = require('child_process');

const app = express();

const PORT = 5000;

app.use('/execute-script', (req, res) => {
    const { script } = req.body;

    exec(`node -e "${script}"`, (error, stdout, stderr) => {
        if (error) {
            res.status(500).send(`Error: ${stderr}`);
        } else {
            res.send(stdout);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Sever Running on http://localhost:${PORT}`);
});