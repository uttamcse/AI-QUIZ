const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(bodyParser.json());






app.use(bodyParser.json()); // Parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded

// Your routes here


mongoose.connect('mongodb://localhost:27017/quizdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});


app.post('/api/feedback', (req, res) => {
    const { responses } = req.body;
    const feedback = `Based on your responses, here is your feedback: ${Object.keys(responses).length} answers provided.`;
    const keys = Object.keys(req.body.someObject);

    res.json({ feedback });
  });


  app.post('/your-endpoint', (req, res) => {
    try {
        const someObject = req.body;
        if (!someObject) {
            throw new Error("someObject is null or undefined");
        }
        const keys = Object.keys(someObject);
        // Proceed with your logic using keys...
        res.json({ keys });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



  