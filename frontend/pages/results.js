import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Results() {
  const router = useRouter();
  const { id } = router.query;
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch results and feedback from the API
      async function fetchResult() {
        const res = await fetch(`/api/results?id=${id}`);
        const data = await res.json();
        setResult(data);
      }
      fetchResult();
    }
  }, [id]);

  if (!result) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Your Score: {result.score}</h2>
      <h3 className="text-xl mb-2">Feedback:</h3>
      <p>{result.feedback}</p>
    </div>
  );
}
