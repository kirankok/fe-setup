import { UserProfile } from './UserProfile';
import { Login } from './Login';
import { ThemeToggle } from './ThemeToggle';

const Dashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <UserProfile />
      <Login />
      <ThemeToggle />
    </div>
  );
};

export default Dashboard;