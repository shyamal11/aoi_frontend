import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';
import GoogleCallback from './components/LoginPage/GoogleCallback';
import Interest from './components/Interest/Interest';
import ChatContainer from './components/ChatContainer/ChatContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
        <Route path="/interests" element={<Interest />} />
        <Route path="/chat" element={<ChatContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
