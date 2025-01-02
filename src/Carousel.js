import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({
    children,
    autoPlay = false,
    autoPlayInterval = 3000,
    showArrows = true,
    showIndicators = true,
    infiniteLoop = false,
    ...props
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);


  // Move to next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === React.Children.count(children) - 1
        ? (infiniteLoop ? 0 : prevIndex)
        : prevIndex + 1
    );
  };
   // Move to previous slide
   const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? (infiniteLoop ? React.Children.count(children) - 1 : 0)
        : prevIndex - 1
    );
  };

    // Jump to specific index
    const goToIndex = (index) => {
        setCurrentIndex(index);
      };
       // Handle autoPlay
  useEffect(() => {if (!autoPlay) return;
    resetAutoPlay();
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, autoPlay]);
  const resetAutoPlay = () => {
    clearTimeout(timeoutRef.current);timeoutRef.current = setTimeout(() => {
        goToNext();
      }, autoPlayInterval);
    };
  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
}, []);
const totalSlides = React.Children.count(children);

return (
    <div className="my-carousel" {...props}>
          <div className="carousel-track">
          {React.Children.map(children, (child, index) => {
            return (
                <div
                  className="carousel-slide"
                  style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                >
                     {child}
            </div>
          );
        })}
      </div>
      {showArrows && (
        <>
          <button className="arrow prev" onClick={goToPrev}>
            ❮
          </button>
          <button className="arrow next" onClick={goToNext}>
            ❯
          </button>
        </>
      )}   {showIndicators && ( <div className="carousel-indicators"></div>
        {Array.from({ length: totalSlides }).map((_, index) => (