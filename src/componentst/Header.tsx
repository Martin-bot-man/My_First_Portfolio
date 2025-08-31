import type { FC } from 'react';

interface HeaderProps {
  onEnter: () => void;
}

const Header: FC<HeaderProps> = ({ onEnter }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <h1 className="gruppo-regular text-4xl font-bold text-green-400 mb-6 typing-animation">
        Welcome to My Portfolio
      </h1>
      <button
        onClick={onEnter}
        className="gruppo-regular px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-mono"
      >
        Enter
      </button>

      {/* Inline CSS for Typing Animation */}
      <style>{`
        .typing-animation {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #34d399;
          animation: typing 2.5s linear, blink-caret 6s ease-in-out infinite;
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink-caret {
          0%, 100% { border-color: transparent; }
          50% { border-color: #34d399; }
        }
      `}</style>
    </div>
  );
};

export default Header;