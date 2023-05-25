const express = require('express');
const app = express();

app.use(express.json());

exports.resumes = async (req, res) => {
    res.send('resumes');
};
