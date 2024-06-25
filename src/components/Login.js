import React, { useState } from 'react';
import users from '../users';

const Login = ({ onLogin }) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.username === selectedUser);
    if (user) {
      onLogin(user);
    } else {
      setError('Please select a user.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Select User:</label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            required
          >
            <option value="">Select...</option>
            {users.map((user) => (
              <option key={user.username} value={user.username}>{user.name}</option>
            ))}
          </select>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
