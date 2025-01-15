import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Carousel Component
 *
 * @param {node} children - Slides (usually <div>, <img>, or any JSX) to be displayed.
 * @param {bool} autoPlay - Whether to automatically cycle through slides.
 * @param {number} autoPlayInterval - Interval (ms) between automatic slides.
 * @param {bool} showArrows - Whether to display next/prev arrows.
 * @param {bool} showIndicators - Whether to display slide indicators.
 * @param {bool} infiniteLoop - Whether to loop from last slide back to first and vice versa.
 * @param {object} props - Additional props passed to the carousel container.
 */
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

  // The total number of slides
  const totalSlides = React.Children.count(children);

  /**
   * Moves to the next slide.
   */
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === totalSlides - 1) {
        return infiniteLoop ? 0 : prevIndex;
      }
      return prevIndex + 1;
    });
  };

  /**
   * Moves to the previous slide.
   */
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return infiniteLoop ? totalSlides - 1 : 0;
      }
      return prevIndex - 1;
    });
  };

  /**
   * Moves directly to a specific slide index.
   */
  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  /**
   * Clears the existing timeout and sets a new one
   * (for autoPlay functionality).
   */
  const resetAutoPlay = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, autoPlayInterval);
  };

  /**
   * Run autoPlay effect when currentIndex, autoPlay, or autoPlayInterval changes.
   * Clear timeout on unmount.
   */
  useEffect(() => {
    if (autoPlay) {
      resetAutoPlay();
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, autoPlay, autoPlayInterval]);

  // Clear the timeout if the component unmounts.
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="carousel-container" {...props}>
      {/* Track that holds all slides */}
      <div className="carousel-track">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Arrows for navigation */}
      {showArrows && (
        <>
          <button className="arrow prev" onClick={goToPrev}>
            ❮
          </button>
          <button className="arrow next" onClick={goToNext}>
            ❯
          </button>
        </>
      )}

      {/* Indicators (optional) */}
      {showIndicators && (
        <div className="carousel-indicators">
          {React.Children.map(children, (_child, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToIndex(index)}
            >
              •
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  autoPlay: PropTypes.bool,
  autoPlayInterval: PropTypes.number,
  showArrows: PropTypes.bool,
  showIndicators: PropTypes.bool,
  infiniteLoop: PropTypes.bool,
};

export default Carousel;
