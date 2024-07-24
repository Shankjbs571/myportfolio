import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand(command);
      setCommand('');
    } else if (e.key === 'Backspace') {
      setCommand(command.slice(0, -1));
    } else if (e.key.length === 1) {
      setCommand(command + e.key);
    }
  };

  const processCommand = (cmd) => {
    let result;
    if (cmd.trim() === 'help') {
      result = 'Available commands: help, echo, clear';
    } else if (cmd.trim() === 'clear') {
      setOutput([]);
      return;
    } else if (cmd.startsWith('echo ')) {
      result = cmd.slice(5);
    } else {
      result = `Command not found: ${cmd}`;
    }
    setOutput([...output, { command: cmd, result }]);
  };

  return (
    <div className="bg-black text-green-500 font-mono p-4 h-screen overflow-y-auto flex flex-col" onClick={() => inputRef.current.focus()}>
      <div className="flex-grow">
        {output.map((item, index) => (
          <div key={index}>
            <div className="whitespace-pre-wrap break-words">{item.command}</div>
            <div className="whitespace-pre-wrap break-words">{item.result}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <span className="mr-2">shankjbs175@TERMINAL $</span>
        {/* <span className="whitespace-pre-wrap break-words">{command}</span> */}
        <span className="border-r-2 border-green-500 animate-blink" ref={inputRef} contentEditable onKeyDown={handleKeyDown}></span>
      </div>
    </div>
  );
};

export default Terminal;
