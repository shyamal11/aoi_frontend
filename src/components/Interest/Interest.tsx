import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Interest.css';

const Interest = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleInterestClick = (interest: string) => {
    setSelectedInterests(prev => {
      if (prev.includes(interest)) {
        return prev.filter(i => i !== interest);
      }
      if (prev.length < 3) {
        return [...prev, interest];
      }
      return prev;
    });
  };

  const handleNext = () => {
    if (selectedInterests.length > 0) {
      navigate('/chat');
    }
  };

  const interests = [
    'Children & Education',
    'Disaster Relief',
    'Well-being',
    'Environment & Sustainability',
    'Women Empowerment',
    'Animal Welfare',
    'Rural Empowerment',
    'River Rejuvenation',
    'Organizing SKY Workshops',
    'Youth Empowerment'
  ];

  return (
    <div className="interest-page">
      <h1 className="heading">Please indicate your top three interests</h1>
      <div className="container">
        {interests.map((interest, index) => (
          <div
            key={index}
            className={`interest-box ${selectedInterests.includes(interest) ? 'selected' : ''}`}
            onClick={() => handleInterestClick(interest)}
          >
            {interest}
          </div>
        ))}
      </div>
      <button 
        className={`component-2 ${selectedInterests.length > 0 ? 'active' : ''}`}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Interest;