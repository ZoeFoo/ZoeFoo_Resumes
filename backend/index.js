const express = require('express');
const cors = require('cors');
const app = express();
const port = 3005;
const connectDB = require("./db");

app.use(express.json());
app.use(cors());
connectDB().then(() => {
    app.use("/auth", require("./auth/route"));

    app.post('/submit-data', (req, res) => {
        res.send(req.body);
    })

    app.listen(port, () => {
        console.log(`App listening on port: http://locathost:${port}`)
    });
});


