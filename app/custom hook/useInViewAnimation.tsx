import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const useInViewAnimation = (
  options = { threshold: 0.2, triggerOnce: true }
) => {
  const controls = useAnimation(); // framer-motion controls
  const [ref, inView] = useInView({
    threshold: options.threshold,
    triggerOnce: options.triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 }); // Trigger animation when in view
    } else {
      controls.start({ opacity: 0, y: 100 }); // Reset when out of view (if triggerOnce is false)
    }
  }, [controls, inView]);

  return { ref, controls };
};

export default useInViewAnimation;
