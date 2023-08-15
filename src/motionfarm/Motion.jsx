import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Motionfarm() {
  const [isAnimated, setIsAnimated] = useState(false);

  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimated ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {isAnimated ? 'Animated content' : ''}
      </motion.div>
      <button onClick={toggleAnimation}>Toggle Animation</button>
    </div>
  );
}

export default Motionfarm;
