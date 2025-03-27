import { AppleIcon, GoogleIcon, MetaIcon, EmailIcon } from '../../assets/icons'
import './LoginPage.css'

function LoginPage() {
  const handleGoogleLogin = () => {
    const clientId = 'YOUR_GOOGLE_CLIENT_ID';
    const redirectUri = encodeURIComponent('http://localhost:5173/auth/google/callback');
    const scope = encodeURIComponent('email profile');
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    window.location.href = url;
  };

  const handleAppleLogin = () => {
    const clientId = 'YOUR_APPLE_CLIENT_ID';
    const redirectUri = encodeURIComponent('http://localhost:5173/auth/apple/callback');
    const url = `https://appleid.apple.com/auth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email name&response_mode=form_post`;
    window.location.href = url;
  };

  const handleMetaLogin = () => {
    const appId = 'YOUR_META_APP_ID';
    const redirectUri = encodeURIComponent('http://localhost:5173/auth/meta/callback');
    const url = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&scope=email,public_profile`;
    window.location.href = url;
  };

  const handleEmailLogin = () => {
    window.location.href = '/login/email';
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <div className="logo">
          <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.5" y="2.5" width="58" height="58" rx="7.5" stroke="black" stroke-width="5"/>
            <rect x="16.5" y="16.5" width="31" height="31" rx="2.5" fill="#EADDFF" stroke="black" stroke-width="5"/>
          </svg>
        </div>
        <h1>Altru AI</h1>
      </div>

      <div className="login-container">
        <button className="login-button apple-button" onClick={handleAppleLogin}>
          <AppleIcon />
          <span>Continue with Apple</span>
        </button>
        <button className="login-button dark-button" onClick={handleGoogleLogin}>
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>
        <button className="login-button dark-button" onClick={handleMetaLogin}>
          <MetaIcon />
          <span>Continue with Meta</span>
        </button>
        <button className="login-button dark-button" onClick={handleEmailLogin}>
          <EmailIcon />
          <span>Log in with e-mail</span>
        </button>
      </div>
    </div>
  )
}

export default LoginPage 