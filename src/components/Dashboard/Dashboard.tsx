import { useAuthStore } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {user.name}!</h1>
        <div className="user-info">
          <img 
            src={user.picture || 'https://via.placeholder.com/100'} 
            alt={user.name} 
            className="profile-picture"
          />
          <div className="user-details">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Name:</strong> {user.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 