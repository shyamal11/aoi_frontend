import { useState } from 'react';
import './ChatContainer.css';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatContainer = () => {
  const [message, setMessage] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (message.trim()) {
      // Add user message to chat
      const userMessage = { text: message, isUser: true };
      setMessages(prev => [...prev, userMessage]);
      
      // Clear input
      setMessage('');
      setIsLoading(true);

      try {
        const response = await fetch('https://render-poc-j27e.onrender.com/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: message }),
        });

        const data = await response.json();
        
        // Add AI response to chat
        const aiMessage = { text: data.response, isUser: false };
        setMessages(prev => [...prev, aiMessage]);
      } catch (error) {
        console.error('Error:', error);
        const errorMessage = { 
          text: 'Sorry, I encountered an error. Please try again.',
          isUser: false 
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleQuickButtonClick = (text: string) => {
    setMessage(text);
  };

  const toggleProfileBox = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="chat-page">
      <div className="container">
        <div className="header">
          <div className="menu-icon">☰</div>
          <div className="title">Altru AI</div>
          <img 
            src="/user-placeholder.jpg" 
            alt="User" 
            className="user-icon"
            onClick={toggleProfileBox}
          />
          <div className={`profile-box ${showProfile ? 'active' : ''}`}>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
          </div>
        </div>
        
        <div className="chat-container">
          {/* Messages */}
          <div className="messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.isUser ? 'user' : 'ai'}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="message ai loading">
                Thinking...
              </div>
            )}
          </div>

          {/* Quick Buttons */}
          <div className="quick-buttons">
            <button onClick={() => handleQuickButtonClick("How can I donate to Child Care program?")}>
              "How can I donate to Child Care program?"
            </button>
            <button onClick={() => handleQuickButtonClick("Show programs based on my interests")}>
              "Show programs based on my interests"
            </button>
            <button onClick={() => handleQuickButtonClick("How can I donate to Child Care program?")}>
              "How can I donate to Child Care program?"
            </button>
           
          </div>
        </div>
        
        <div className="chat-input">
          <input 
            type="text" 
            placeholder="Message Altru"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={isLoading}
          />
          <div 
            className={`send-icon ${isLoading ? 'disabled' : ''}`} 
            onClick={!isLoading ? handleSendMessage : undefined}
          >
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1_237)">
                <rect x="8" y="10" width="36" height="36" rx="18" fill="#F2F2F7"/>
              </g>
              <path d="M32.0703 24.51L23.5103 20.23C17.7603 17.35 15.4003 19.71 18.2803 25.46L19.1503 27.2C19.4003 27.71 19.4003 28.3 19.1503 28.81L18.2803 30.54C15.4003 36.29 17.7503 38.65 23.5103 35.77L32.0703 31.49C35.9103 29.57 35.9103 26.43 32.0703 24.51ZM28.8403 28.75H23.4403C23.0303 28.75 22.6903 28.41 22.6903 28C22.6903 27.59 23.0303 27.25 23.4403 27.25H28.8403C29.2503 27.25 29.5903 27.59 29.5903 28C29.5903 28.41 29.2503 28.75 28.8403 28.75Z" fill="#292D32"/>
              <defs>
                <filter id="filter0_d_1_237" x="0.2" y="0.2" width="51.6" height="51.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="-2"/>
                  <feGaussianBlur stdDeviation="3.9"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_237"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_237" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;