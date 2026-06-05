import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children:   ReactNode;
  className?: string;
  delay?:     number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?:  number;
  amount?:    number; // 0–1, how much of element must be visible to trigger
}

const directionOffset = {
  up:    { y: 36, x: 0  },
  down:  { y: -36, x: 0 },
  left:  { y: 0,  x: 36 },
  right: { y: 0,  x: -36 },
  none:  { y: 0,  x: 0  },
};

export default function ScrollReveal({
  children,
  className = '',
  delay     = 0,
  direction = 'up',
  duration  = 0.55,
  amount    = 0.15,
}: ScrollRevealProps) {
  const ref      = useRef(null);
  // ✅ Fixed: use `amount` instead of only `margin` for more reliable triggering
  const isInView = useInView(ref, { once: true, amount });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const { y, x } = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y,
          x,
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration,
            delay,
            // smooth custom ease
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}