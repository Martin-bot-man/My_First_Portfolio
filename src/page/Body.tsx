import React, { useState } from 'react';
import type { FC } from 'react'; // Type-only import for Function Component
import type { FormEvent } from 'react'; // Type-only import for FormEvent

interface TerminalSectionProps {
  id: string;
  title: string;
  content: string;
}

const TerminalSection: FC<TerminalSectionProps> = ({ id, title, content }) => {
  const [command, setCommand] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validCommands: { [key: string]: string } = {
    about: 'about',
    projects: 'projects',
    contact: 'contact',
  };

  const handleCommand = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cmd = command.trim().toLowerCase();
    if (validCommands[cmd]) {
      window.location.hash = validCommands[cmd];
      setError('');
      setCommand('');
    } else {
      setError(`Command not found: ${cmd}. Try 'about', 'projects', or 'contact'.`);
      setCommand('');
    }
  };

  return (
    <section id={id} className="mb-12 bg-gray-800 rounded-lg shadow-lg p-6 terminal">
      <h2 className="text-2xl font-mono text-green-400 mb-4 gruppo-regular">$ {title.toLowerCase()}</h2>
      <p className="text-gray-300 font-mono typing-animation">{content}</p>
      <form onSubmit={handleCommand} className="mt-4">
        <div className="flex items-center">
          <span className="text-green-400 font-mono mr-2">$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="bg-gray-900 text-gray-300 font-mono p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Type a command (e.g., about, projects, contact)"
          />
        </div>
        {error && <p className="text-red-400 font-mono mt-2">{error}</p>}
      </form>
    </section>
  );
};

const Body: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gruppo-regular">My Terminal Blog</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#welcome" className="hover:text-green-400">Welcome</a></li>
              <li><a href="#about" className="hover:text-green-400">About</a></li>
              <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="welcome" className="mb-12 bg-gray-800 rounded-lg shadow-lg p-6 terminal">
          <h2 className="text-2xl font-mono text-green-400 mb-4 gruppo-regular">$ welcome</h2>
          <p className="text-gray-300 font-mono typing-animation">
            Welcome to my terminal blog! Navigate using commands below:
          </p>
          <ul className="text-gray-300 font-mono mt-4 list-disc list-inside">
            <li><span className="text-green-400">$ about</span> - View the About Me section</li>
            <li><span className="text-green-400">$ projects</span> - View the My Projects section</li>
            <li><span className="text-green-400">$ contact</span> - View the Contact Me section</li>
          </ul>
          <p className="text-gray-300 font-mono mt-2">
            Type a command in the input field to jump to a section.
          </p>
        </section>
        <TerminalSection id="about" title="About Me" content="This is the about section." />
        <TerminalSection id="projects" title="My Projects" content="This is the projects section." />
        <TerminalSection id="contact" title="Contact Me" content="This is the contact section." />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-mono">&copy; {new Date().getFullYear()} My Terminal Blog. All rights reserved.</p>
          <div className="mt-2">
            <a href="#top" className="text-green-400 hover:text-green-300 mx-2">Back to Top</a>
          </div>
        </div>
      </footer>

      {/* Inline CSS for Terminal Animation */}
      <style>{`
        .terminal {
          position: relative;
          overflow: hidden;
        }
        .typing-animation {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #34d399;
          animation: typing 2s steps(30, end), blink-caret 0.75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #34d399; }
        }
      `}</style>
    </div>
  );
};

export default Body;