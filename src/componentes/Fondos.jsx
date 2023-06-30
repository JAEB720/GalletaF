import React from "react";

const Fondos = ({ fondoIndex }) => {
  const fondos = [
    '/fondo1.jpg',
    '/fondo2.jpg',
    '/fondo3.jpg',
    '/fondo4.jpg',
  
  ];

  return (
    <div className="fondo" style={{ backgroundImage: `url(${fondos[fondoIndex]})` , backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
    
    </div>
  );
};

export default Fondos;
