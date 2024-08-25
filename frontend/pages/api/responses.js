import { v4 as uuidv4 } from 'uuid';

const results = {};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { responses } = req.body;
    const id = uuidv4();
    const score = Object.values(responses).filter(response => response === '4' || response === 'Paris').length;
    results[id] = {
      score,
      feedback: `You scored ${score} out of 2.`,
    };
    res.status(200).json({ id });
  } else {
    res.status(405).end();
  }
}
