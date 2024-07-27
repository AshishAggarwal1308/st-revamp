import React from 'react';
import styles from './Ticker.module.css';
import { Righteous } from 'next/font/google';

const images = [
  'Slider.png', // Replace with your image URLs
  'Slider.png',
];

const Ticker: React.FC = () => {
  return (
    <>
      <div>
        <h1 className='flex justify-end pr-16 opacity-30 text-white pt-12 text-9xl font-bold alfa-slab-one-regular tracking-wider'>ALUMNI</h1>
      </div>
      <div className={styles['ticker-container']}>
        <div className={styles['ticker-content']}>
          {images.map((image, index) => (
            <div key={index} className={styles['ticker-item']}>
              <img src={image} alt={`Ticker ${index}`} className={styles['ticker-image']} />
            </div>
          ))}
          {/* Duplicate the content to create an infinite loop */}
          {images.map((image, index) => (
            <div key={index + images.length} className={styles['ticker-item']}>
              <img src={image} alt={`Ticker ${index}`} className={styles['ticker-image']} />
            </div>
          ))}
        </div>
      </div>
      </>

  );
};

export default Ticker;
