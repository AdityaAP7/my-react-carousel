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