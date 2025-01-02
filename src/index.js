// src/index.js
export { default as Carousel } from './Carousel';

import React from 'react';
import { Carousel } from 'my-react-carousel'; 
// The import path might vary; it’s linked locally during development

import './App.css';

function App() {return (
<div className="App">  <h1>Testing My React Carousel</h1>
<Carousel autoPlay={true} autoPlayInterval={2000} infiniteLoop={true}> <div style={{ background: 'red', height: '200px' }}>Slide 1</div> <div style={{ background: 'green', height: '200px' }}>Slide 2</div>div style={{ background: 'blue', height: '200px' }}>Slide 3</div>
      </Carousel>
    </div>
  );
}

export default App;