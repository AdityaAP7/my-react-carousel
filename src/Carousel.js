resetAutoPlay();
    return () => clearTimeout(timeoutRef.current);// Handle autoPlay
      };const goToIndex = (index) => {import React, { useState, useEffect, useRef } from 'react';
import React, { useState, useEffect, useRef } from 'react';// Jump to specific index
import PropTypes from 'prop-types';
            };const goToIndex = (index) => {import React, { useState, useEffect, useRef } from 'react';
import React, { useState, useEffect, useRef } from 'react';// Jump to specific index
import PropTypes from 'prop-types';               
                                       
  useEffect(() => {if (!autoPlay) return;setCurrentIndex(index);
     
                                     
                                             import React, { useState, useEffect, useRef } from 'react';// Jump to specific index
import PropTypes from 'prop-types';
                                      rt PropTypes from 'prop-types';
                                         return () => clearTimeout(timeoutRef.current);// Handle autoPlay
  useEffect(() => {if (!autoPlay) return;setCurrentIndex(index);
      };const goToIndex = (index) => {import React, { useState, useEffect, useRef } from 'react';
import React, { useState, useEffect, useRef } from 'react';// Jump to specific index
import PropTypes from 'prop-types';
import PropTypes from 'prop-type

const Carousel = ({
    children,
    autoPlay = false,
    autoPlayInterval = 3000,
    showArrows = true,
    showIndicators = true,
    infiniteLoop = false,
    ...props
  }) => {
      // Move to next slide
    const goToNext = () => {
    setCurrentIndex((prevIndex) =>
        // Move to previous slide
   const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? (infiniteLoop ? React.Children.count(children) - 1 : 0)
        : prevIndex - 1
    );
  };
     ...props
  }) => {
const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    );
  };
 
const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);
import React, { useState, useEffect, useRef } from 'react';// Jump to specific index
import PropTypes from 'prop-types';
                     


const Carousel = ({

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
     prevIndex === React.Children.count(children) - 1
        ? (infiniteLoop ? 0 : prevIndex)
        : prevIndex + 1
    );
  };
    setCurrentIndex((prevIndex) =>
      prevIndex === React.Children.count(children) - 1
        ? (infiniteLoop ? 0 : prevIndex)
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === React.Children.count(children) - 1
        ? (infiniteLoop ? 0 : prevIndex)
        : prevIndex + 1
    );
  };
   // Move to 
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
        rt PropTypes from 'prop-types';
                                         return () => clearTimeout(timeoutRef.current);// Handle autoPlay
  useEffect(() => {if (!autoPlay) return;setCurrentIndex(index);
      };const goToIndex = (index) => {impor
      
                                              : prevIndex + 1prevIndex === 0
        ? (infiniteLoop ? React.Children.count(children) - 1 : 0)
        : prevIndex - 1
    );
  };
    setCurrentIndex((prevIndex) =>
        rt PropTypes from 'prop-types';
    // Jump to specific index
c(index);
      };
       // Handle autoPlay
    // Jump to specific index
    // Jump to specific index
                                      
    const goToIndex = (index) => {
        setCurrentIndex(index);
      };
       // Handle autoPlay
  useEffect(() => {if (!autoPlay) return;
    resetAutoPlay(); rt PropTypes from 'prop-types';
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, autoPlay]);
                       setCurrentIndex((prevIndex) =>
        rt PropTypes from 'prop-types';
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, autoPlay]);
  const resetAutoPlay = () => {
    clearTimeout(timeoutRef.current);timeoutRef.current = setTimeout(() => {       rt PropTypes from 'prop-types';
                                         return () => clearTimeout(timeoutRef.current);// Handle autoPlay
  useEffect(() => {if (!autoPlay) return;setCurrentIndex(index);
        goToNext();
      }, autoPlayInterval);
    };
  // Cleanup on unmount
                                          setCurrentIndex((prevIndex) =>
        rt PropTypes from 'prop-types';
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
}, []);
const totalSlides = React.Children.count(children);

return (
    <div className="my-carousel" {...props}>                <div
                  className="carousel-slide"
                  style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                >
                     {child}
            </div>
          );
        })}
          <div className="carousel-track">
          {React.Children.map(children, (child, index) => {
            return (
                <div
                  className="carousel-slide"
                  style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                >     <div className="carousel-track">
          {React.Children.map(children, (child, index) => {
            return (
                <div
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
          <button className="arrow prev" onClick={goToPrev}>
            ❮
          </button>
          <button className="arrow next" onClick={goToNext}>
            ❯
          </button>
        </>
            <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          />  ))}
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
