'use client';

import React, { useEffect, useState } from 'react';

const PETAL_COUNT = 20;

const FloatingPetals = () => {
  const [petals, setPetals] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals = Array.from({ length: PETAL_COUNT }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 5 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
        };
        return <i key={i} className="petal animate-fall" style={style} />;
      });
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return <div className="petal-container">{petals}</div>;
};

export default FloatingPetals;
