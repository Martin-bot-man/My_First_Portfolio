import  { useState } from 'react';
import type { FC } from 'react';
import './App.css';
import Header from './componentst/Header';
import Body from './page/Body';

const App: FC = () => {
  const [showBody, setShowBody] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleEnter = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowBody(true);
    }, 3000); // 3-second delay
  };

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
          <p className="text-2xl font-mono text-green-400 loading-animation">
            Loading...
          </p>
          {/* Inline CSS for Loading Animation */}
          <style>{`
            .loading-animation {
              display: inline-block;
              font-mono: 'monospace';
              animation: pulse 1.5s ease-in-out infinite;
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `}</style>
        </div>
      ) : showBody ? (
        <Body />
      ) : (
        <Header onEnter={handleEnter} />
      )}
    </>
  );
};

export default App;