ea1211 React, { useState, useEffect, useRef, Children } from 'react';
w2341
e123456789
tyui11
import PropTypes from 'prop-types';
/**
 * Carousel Component
 *
 * @param {object} props - Carousel properties.
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
  const totalSlides = Children.count(children);
  // Update the current index with optional loop behavior
  const updateIndex = (newIndex) => {
    setCurrentIndex((prevIndex) => {
      if (newIndex < 0) {
        return infiniteLoop ? totalSlides - 1 : prevIndex;
}
      if (newIndex >= totalSlides) {
        return infiniteLoop ? 0 : prevIndex;
}
      return newIndex;
  });
 };
  // Handle keyboard navigation (e.g., arrow keys)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      updateIndex(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateIndex(currentIndex + 1);
  }
  };
  // Auto-play effect
  useEffect(() => {
    if (!autoPlay) return;
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
   }
    // Set up the next slide change
    timeoutRef.current = setTimeout(() => {
      updateIndex(currentIndex + 1);
    }, autoPlayInterval);
    // Clean up on unmount or when dependencies change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
}      {...props}

 };  >
  }, [autoPlay, autoPlayInterval, currentIndex]);
  return (
    <div
      className="carousel-container"
      onKeyDown={handleKeyDown}
      tabIndex={0} // Makes div focusable so key events will be detected
      {/* Arrows */}
      {showArrows && (
        <div className="carousel-arrows">
          <button onClick={() => updateIndex(currentIndex - 1)}>Prev</button>
          <button onClick={() => updateIndex(currentIndex + 1)}>Next</button>
        </div>
      )}
      {/* Slides */}
      <div className="carousel-slides">
        {Children.map(children, (child, index) => (
          <div
            className="carousel-slide"
            style={{
              display: index === currentIndex ? 'block' : 'none',
            }}
          >
            {child}
          </div>
        ))}
      </div>
      {/* Indicators */}
      {showIndicators && (
        <div className="carousel-indicators">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => updateIndex(index)}
              style={{ opacity: index === currentIndex ? 1 : 0.5 }}
            >
              {index + 1}
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
