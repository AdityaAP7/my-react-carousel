// src/index.js
export { default as Carousel } from './Carousel';

import React from 'react';
import { Carousel } from 'my-react-carousel'; 
// The import path might vary; it’s linked locally during development

import './App.css';

function App() {return (
<div className="App">  <h1>Testing My React Carousel</h1>
<Carousel autoPlay={true} autoPlayInterval={2000} infiniteLoop={true}>