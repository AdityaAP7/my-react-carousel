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
