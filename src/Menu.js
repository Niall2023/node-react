import React from 'react';
import './ImageContainer.css'; 

const ImageContainer = () => {
  return (
    <div className="image-container">
      <img src={require('./ocho-de-corazones-naipe-sobre-fondo-blanco-2a7pf5t.jpg').default} alt="Image 1" />
      <img src={require('./ocho-de-corazones-naipe-sobre-fondo-blanco-2a7pf5t.jpg').default} alt="Image 2" />
      <img src={require('./ocho-de-corazones-naipe-sobre-fondo-blanco-2a7pf5t.jpg').default} alt="Image 3" />
    </div>
  );
};

export default ImageContainer;