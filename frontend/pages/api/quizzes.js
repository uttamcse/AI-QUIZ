export default function handler(req, res) {
    const quizzes = [
      {
        text: "What is 2 + 2?",
        options: ["3", "4", "5"],
      },
      {
        text: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris"],
      },
    ];
    res.status(200).json(quizzes);
  }
  