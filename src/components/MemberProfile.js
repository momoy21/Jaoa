import React, { useState } from 'react';
import './About.css';

const MemberProfile = ({ member }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleMouseEnter = () => {
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };

  return (
    <div
      className={`profile-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="profile-front">
        <img
          src={member.photo}
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="profile-back">
        <h3>{member.name}</h3>
        <p>NIM: {member.nim}</p>
        <p>{member.quote}</p>
      </div>
    </div>
  );
};

export default MemberProfile;
