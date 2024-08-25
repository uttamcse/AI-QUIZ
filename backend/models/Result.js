const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
    userId: String,
    quizId: mongoose.Schema.Types.ObjectId,
    answers: [String],
    score: Number,
    feedback: String
});

module.exports = mongoose.model('Result', ResultSchema);
