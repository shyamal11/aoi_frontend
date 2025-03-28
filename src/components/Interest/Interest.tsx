import { useState } from 'react';
import './Interest.css';

const Interest = () => {
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
      console.log('Selected interests:', selectedInterests);
      // Handle navigation or next step
    }
  };

  return (
    <div className="interest-page">
      <h1 className="heading">Please indicate your top three interests</h1>

      <div className="container">
        <div className="left-side">
          <div 
            className={`interest-box ${selectedInterests.includes('Children & Education') ? 'selected' : ''}`}
            onClick={() => handleInterestClick('Children & Education')}
          >
            Children & Education
          </div>
          <div 
            className={`interest-box ${selectedInterests.includes('Well-being') ? 'selected' : ''}`}
            onClick={() => handleInterestClick('Well-being')}
          >
            Well-being
          </div>
          <div 
            className={`interest-box ${selectedInterests.includes('Women Empowerment') ? 'selected' : ''}`}
            onClick={() => handleInterestClick('Women Empowerment')}
          >
            Women Empowerment
          </div>
          <div 
            className={`interest-box ${selectedInterests.includes('Rural Empowerment') ? 'selected' : ''}`}
            onClick={() => handleInterestClick('Rural Empowerment')}
          >
            Rural Empowerment
          </div>
          <div 
            className={`interest-box ${selectedInterests.includes('Organizing SKY workshops') ? 'selected' : ''}`}
            onClick={() => handleInterestClick('Organizing SKY workshops')}
          >
            Organizing SKY workshops
          </div>
        </div>
        <div className="right-side">
          <div 
            className={`interest-box ${selectedInterests.includes('Disaster Relief') ? 'selected' : ''}`}
            onClick={() => handleInterestClick('Disaster Relief')}
          >
            Disaster Relief
          </div>
          <div 
            className={`interest-box ${selectedInterests.includes('Environment & Sustainability') ? 'selected' : ''}`}
            onClick={() => handleInterestClick('Environment & Sustainability')}
          >
            Environment & Sustainability
          </div>
          <div 
            className={`interest-box ${selectedInterests.includes('Animal Welfare') ? 'selected' : ''}`}
            onClick={() => handleInterestClick('Animal Welfare')}
          >
            Animal Welfare
          </div>
          <div 
            className={`interest-box ${selectedInterests.includes('River rejuvenation') ? 'selected' : ''}`}
            onClick={() => handleInterestClick('River rejuvenation')}
          >
            River rejuvenation
          </div>
          <div 
            className={`interest-box ${selectedInterests.includes('Youth Empowerment') ? 'selected' : ''}`}
            onClick={() => handleInterestClick('Youth Empowerment')}
          >
            Youth Empowerment
          </div>
        </div>
      </div>

      <div className={`component-2 ${selectedInterests.length > 0 ? 'active' : ''}`} onClick={handleNext}>
        <div className="rectangle-2"></div>
        <div className="next">Next</div>
      </div>
    </div>
  );
};

export default Interest; 