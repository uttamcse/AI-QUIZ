import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">AI Assessment Engine</h1>
        <Link href="/quiz">
          <a className="bg-blue-500 text-white px-4 py-2 rounded">Start Quiz</a>
        </Link>
      </div>
    </div>
  );
}
