import React, { useState, useEffect, useRef, Children } from 'react';
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
  const updateIndex = (newIndex) => {
    setCurrentIndex((prevIndex) => {
      if (newIndex < 0) return infiniteLoop ? totalSlides - 1 : prevIndex;
      if (newIndex >= totalSlides) return infiniteLoop ? 0 : prevIndex;
      return newIndex;
 });
  // Helper function to update the current index with optional loop behavior
  const updateIndex = (newIndex) => {
    setCurrentIndex((prevIndex) => {
      if (newIndex < 0) {
        return infiniteLoop ? totalSlides - 1 : prevIndex;
}
      return newIndex;
    });
  };
  // Auto-play effect
  useEffect(() => {
    if (autoPlay) {
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
        }
      };
 }
  }, [autoPlay, autoPlayInterval, currentIndex]);
  return (
    <div className="carousel-container" {...props}>
      {/* Arrows */}
      {showArrows && (
        <div className="carousel-arrows">
          <button onClick={() => updateIndex(currentIndex - 1)}>
            Prev
          </button>
          <button onClick={() => updateIndex(currentIndex + 1)}>
            Next
          </button>
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
 const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    // Example: handle arrow key navigation if needed
    // if (e.key === 'ArrowRight') { ... }
    // if (e.key === 'ArrowLeft') { ... }
};
  return (
 <button
 role="tab"
 id={id}
