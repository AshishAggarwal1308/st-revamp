import React from 'react';
import './HoverCard.css';
import '@fontsource/alfa-slab-one';

interface HoverCardProps {
  image: string;
  title: string;
  description: string;
  gifSrc: string;
  isActive: boolean;
  onHover: () => void;
}

const HoverCard: React.FC<HoverCardProps> = ({ image, title, description, gifSrc, isActive, onHover }) => {
  return (
    <div className="hover-card-container">
      <div
        className="card"
        style={{ backgroundImage: `url(${image})` }}
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      >
        {!isActive && (
          <div className="card-content" style={{ fontFamily: 'Alfa Slab One' }}>
            <h2
              style={{
                fontSize: 26,
                fontWeight: 100,
                textAlign: 'center',
                padding: '20px 50px',
                letterSpacing: 1,
                color: '#F4C113',
              }}
            >
              {title}
            </h2>
            {/* <p style={{ fontSize: 18, fontWeight: 500, textAlign: 'center', padding: 30, fontFamily: 'Inter' }}>{description}</p> */}
          </div>
        )}
        {isActive && <img className="card-gif" src={gifSrc} alt="GIF" />}
      </div>
    </div>
  );
};

export default HoverCard;
