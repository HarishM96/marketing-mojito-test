import React from 'react';
import './coursepage.css';
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Carousel = () => {
  return (
    <div className='carousel'>
      <div className="carsoule-typo">
        <h2> Insurance Career Mastery </h2>
        <p> This is the perfect starting point to launch your career in the insurance sector. </p>
      </div>
      <div className='carousel-cards'>
        <div className='card'>
          <FaClockRotateLeft id="icon" />
          <div>
            <p> Duration </p>
            <p className='ptag-sub'> 1 Month</p>
          </div>
        </div>
        <div className='card-laptop'>
          <FaLaptop id="icon" />
          <div>
            <p> Mode of training </p>
            <p className='ptag-sub'> Self  Learning Modules</p>
          </div>
        </div>
        <div className='card'>
          <FaUsers id="icon" />
          <div>
            <p>For whom </p>
            <p className='ptag-sub'> Fresh Graduates</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel;