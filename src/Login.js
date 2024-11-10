import { useUser } from './UserContext';

export const Login = () => {
  const { login } = useUser();

  const handleLogin = () => {
    // Mock login data
    const mockUser = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
    };
    login(mockUser); // Set user data and authenticate
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In as Jane Doe</button>
    </div>
  );
}