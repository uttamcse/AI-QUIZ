import { useState, useEffect } from 'react';
import Router from 'next/router';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    // Fetch quiz questions from the API
    async function fetchQuestions() {
      const res = await fetch('/api/quizzes');
      const data = await res.json();
      setQuestions(data);
    }
    fetchQuestions();
  }, []);

  const handleResponse = (answer) => {
    setResponses({ ...responses, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      submitQuiz();
    }
  };

  const submitQuiz = async () => {
    const res = await fetch('/api/responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ responses }),
    });
    const data = await res.json();
    Router.push(`/results?id=${data.id}`);
  };

  if (questions.length === 0) return <p>Loading...</p>;

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">{question.text}</h2>
      <div className="flex flex-col space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleResponse(option)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

const submitQuiz = async () => {
    const res = await fetch('/api/responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ responses }),
    });
    const data = await res.json();
    
    const feedbackRes = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ responses }),
    });
    const feedbackData = await feedbackRes.json();
  
    Router.push(`/results?id=${data.id}&feedback=${encodeURIComponent(feedbackData.feedback)}`);
  };
 