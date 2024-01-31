// components/Auth/Login.tsx

import React, { useState } from 'react';
import { DefaultButton, PrimaryButton, Stack, TextField, Link } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  onSignUpClick: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onSignUpClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, { toggle: toggleError }] = useBoolean(false);

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's just check if the username and password are not empty
    if (username && password) {
      onLogin(username, password);
    } else {
      toggleError();
    }
  };

  return (
    <Stack tokens={{ childrenGap: 15 }} horizontalAlign="center" verticalAlign="center" styles={{ root: { marginTop: 50 } }}>
      <TextField
        label="Username"
        value={username}
        onChange={(e, newValue) => setUsername(newValue || '')}
        errorMessage={showError && !username ? 'Username is required' : undefined}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e, newValue) => setPassword(newValue || '')}
        errorMessage={showError && !password ? 'Password is required' : undefined}
      />
      <Stack horizontal tokens={{ childrenGap: 15 }}>
        <PrimaryButton text="Login" onClick={handleLogin} />
        <DefaultButton text="Sign Up" onClick={onSignUpClick} />
      </Stack>
    </Stack>
  );
};

export default Login;
