import { create } from 'zustand';

interface User {
  email: string;
  name: string;
  picture?: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
}

type SetState = {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
}

export const useAuthStore = create<AuthState>((set: (fn: (state: SetState) => SetState) => void) => ({
  user: null,
  setUser: (user: User | null) => set((state) => ({ ...state, user })),
  isAuthenticated: false,
}));

export const handleGoogleCallback = async (code: string) => {
  try {
    // Exchange code for tokens
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
        redirect_uri: `${window.location.origin}/auth/google/callback`,
        grant_type: 'authorization_code',
      }),
    });

    const data = await response.json();
    
    // Get user info using access token
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    });

    const userData = await userResponse.json();
    
    return {
      email: userData.email,
      name: userData.name,
      picture: userData.picture,
    };
  } catch (error) {
    console.error('Error during Google authentication:', error);
    throw error;
  }
}; 