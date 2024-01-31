// Dashboard.tsx

import React from 'react';

const Dashboard: React.FC = () => {
  const handleButtonClick = (buttonType: string) => {
    console.log(`Button ${buttonType} clicked`);
    // You can add your own logic here
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      
      <button
        style={{
          backgroundColor: 'blue',
          color: 'white',
          fontSize: '1.5rem',
          padding: '10px 20px',
          margin: '5px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '5px',
        }}
        onClick={() => handleButtonClick('Button 1')}
      >
        View Cases
      </button>

      <button
        style={{
          backgroundColor: 'blue',
          color: 'white',
          fontSize: '1.5rem',
          padding: '10px 20px',
          margin: '5px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '5px',
        }}
        onClick={() => handleButtonClick('Button 2')}
      >
        Add Case
      </button>
    </div>
  );
};

export default Dashboard;
