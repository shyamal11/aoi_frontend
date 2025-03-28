import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleGoogleCallback } from '../../utils/auth';
import { useAuthStore } from '../../utils/auth';

export default function GoogleCallback() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state: { setUser: (user: { email: string; name: string; picture?: string; } | null) => void }) => state.setUser);

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          const userData = await handleGoogleCallback(code);
          setUser(userData);
          navigate('/dashboard');
        } catch (error) {
          console.error('Authentication failed:', error);
          navigate('/login');
        }
      }
    };

    handleCallback();
  }, [navigate, setUser]);

  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Completing login...</p>
    </div>
  );
} 