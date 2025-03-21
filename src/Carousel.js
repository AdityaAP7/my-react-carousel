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
