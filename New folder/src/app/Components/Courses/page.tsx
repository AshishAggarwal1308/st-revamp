"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './carousel.module.css';
import "@fontsource/alfa-slab-one";

interface Course {
  cardhead:String;
  title: string;
  description: string;
  image: string;
}

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.nextArrow}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.prevArrow}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

const Carousel: React.FC = () => {
  const courses: Course[] = [
    {
      cardhead:'COURSES INCLUDE',
      title: 'Derivatives',
      description: 'Dive into the world of "Derivatives" with our course designed for everyone, from beginners to those looking to advance their financial knowledge. We break down complex concepts into simple terms, explaining how derivatives work and their role in managing financial risk.',
      image: '/tutor.png'
    },
    {
      cardhead:'COURSES INCLUDE',
      title: 'Advanced Stocks',
      description: 'Dive into the world of "Derivatives" with our course designed for everyone, from beginners to those looking to advance their financial knowledge. We break down complex concepts into simple terms, explaining how derivatives work and their role in managing financial risk.',
      image: '/tutor.png'
    },
    {
      cardhead:'COURSES INCLUDE',
      title: 'Financial Planning',
      description: 'Dive into the world of "Derivatives" with our course designed for everyone, from beginners to those looking to advance their financial knowledge. We break down complex concepts into simple terms, explaining how derivatives work and their role in managing financial risk. ',
      image: '/tutor.png'
    }
  ];

  const settings = {
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 0.5
  };

  return (
    <>
      <div>
        <h1 className='flex  pl-16 opacity-30 text-white pt-12 text-9xl  tracking-wider' style={{ fontFamily: "Alfa Slab One", }}>COURSES</h1>
      </div>
      <Slider {...settings} className={styles.slider}>
        {courses.map((course, index) => (
          <div>
            <div key={index} className={styles.card}>
              <div style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center' }}>
                <img src={course.image} alt={course.title} className={styles.image} />
                <div className={styles.content}>
                  <p className={styles.cardhead}>{course.cardhead}</p>
                  <h3 className={styles.heading}>{course.title}</h3>
                  <p className={styles.description}>{course.description}</p>
                  <button className={styles.button}>Know more</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
