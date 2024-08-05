import React from 'react';

interface MessageBoxProps {
  message: string;
  position: 'start' | 'end' | 'center'; // Define possible values for position
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, position }) => {
  // Conditional class names based on the position prop
  const positionClasses = {
    start: 'rounded-es-none',
    end: 'rounded-ee-none',
    center: '',
  };

  return (
    <p className={`text-center bg-red-700 rounded-full w-fit p-4 ${positionClasses[position]}`}>
      {message}
    </p>
  );
};

export default MessageBox;
