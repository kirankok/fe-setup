import { UserProvider } from './UserContext';
import Dashboard from './Dashboard';
import './App.css'
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </UserProvider>

  );
};

export default App
