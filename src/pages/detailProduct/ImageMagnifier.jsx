import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';

export const ImageMagnifier = ({ src, alt, width = 400, height = 400, zoom = 1 }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top } = imgRef.current.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setMagnifierPos({ x, y });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'url(\"https://cdn-icons-png.flaticon.com/512/709/709592.png\") 16 16, zoom-in',
      }}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
      {showMagnifier && (
        <Box
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: magnifierPos.y - 75,
            left: magnifierPos.x - 75,
            width: 200,
            height: 200,
            borderRadius: '16px',
            boxShadow: '0 0 8px 2px rgba(0,0,0,0.2)',
            border: '2px solid #fff',
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${width * zoom}px ${height * zoom}px`,
            backgroundPosition: `
              -${Math.max(magnifierPos.x * zoom - 50, 0)}px 
              -${Math.max(magnifierPos.y * zoom - 50, 0)}px
            `,
            zIndex: 10,
          }}
        />
      )}
    </Box>
  );
};
