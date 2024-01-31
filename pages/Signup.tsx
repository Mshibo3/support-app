// Signup.tsx
import React from 'react';

const Signup: React.FC = () => {
  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your signup logic here
    console.log('Signup clicked');
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
      }}>
        <h1 style={{ textAlign: 'center' }}>Signup</h1>
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
            <input type="text" id="email" name="username" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} required />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Username:</label>
            <input type="text" id="username" name="username" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} required />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
            <input type="password" id="password" name="password" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} required />
          </div>
          <div>
            <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Signup</button>
          </div>
        </form>
      </div> 
    </div>
  );
};


export default Signup;
