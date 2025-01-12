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
  const totalSlides = React.Children.count(children);

  /**
   * Moves to the next slide.
   */
 const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      // If at last slide, either loop back or stay there
      if (prevIndex === totalSlides - 1) {
        return infiniteLoop ? 0 : prevIndex;
      }

      /**
   * Moves to the previous slide.
   */
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      // If at first slide, either loop to last or stay there
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
   */
  const goToIndex = (index) => {
    setCurrentIndex(index);
  };
      return prevIndex + 1;
    });
  };
