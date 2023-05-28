import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import './Slide.css';
import { Link } from 'react-router-dom';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className='slider'>
        <FaAngleDoubleLeft className='left-arrow' onClick={prevSlide} />
        <FaAngleDoubleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide-active' : 'slide'} key={index}>
              {index === current && <img src={slide.image} alt='travel image' className='image' />}
              <div className='box'>{slide.description}</div>
              <div className='box2'>
                <h1 className='judulartikel'>{slide.description2}</h1>
                  <img className='image2' src={slide.image2} />
                <p className='parag'>{slide.description3}</p>
              </div>
            </div>
          );
        })}
      </section>

      <footer className='informasi'>
          <div className='bawahan'>
            <small className='website-rights'>Jaoa © 2023</small>
            <div className='social-icons'>
              <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                <i className='fab fa-facebook-f' />
              </Link>
              <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                <i className='fab fa-instagram' />
              </Link>
              <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
                <i className='fab fa-youtube' />
              </Link>
              <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                <i className='fab fa-twitter' />
              </Link>
              <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
                <i className='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </footer>
        </>
  );
}

export default ImageSlider;
