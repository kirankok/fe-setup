import { useUser } from './UserContext';

export const UserProfile = () => {
  const { user, logout } = useUser();

  if (!user.isAuthenticated) {
    return (
      <div>
        <h2>Please log in to see your profile</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}