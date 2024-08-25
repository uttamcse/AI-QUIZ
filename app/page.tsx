// app/page.tsx

import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the AI Assessment Engine</h1>
      <p>This platform allows you to take quizzes and receive AI-generated feedback on your performance.</p>
      
      <div style={{ margin: '20px 0' }}>
        <Link href="/quiz">
          <a style={{ 
            background: '#0070f3', 
            color: '#fff', 
            padding: '10px 20px', 
            borderRadius: '5px', 
            textDecoration: 'none' 
          }}>
            Start Quiz
          </a>
        </Link>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h2>Features:</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Interactive Quizzes</li>
          <li>Instant Results</li>
          <li>AI-Generated Feedback</li>
        </ul>
      </div>
    </div>
  );
}
