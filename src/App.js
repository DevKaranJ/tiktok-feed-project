import React, { useState } from 'react';
import Login from './components/Login';
import Feed from './components/Feed';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <div className="App">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <h1>Welcome, {user.name}!</h1>
          <Feed />
        </>
      )}
    </div>
  );
};

export default App;
