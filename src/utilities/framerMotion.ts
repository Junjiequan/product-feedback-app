export const pageVariants = {
  stop: {
    opacity: 1,
    x: 0,
  },
  initial: {
    opacity: 0,
    x: "20vw",
  },
  in: {
    opacity: 1,
    x: "0",
  },
  out: {
    opacity: 0,
    x: "-20vw",
  },
};
export const emptyVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: "spring", duration: 1 },
  },
};
export const feedbackVariants = {
  stop: {
    opacity: 1,
    y: 0,
  },
  initial: {
    y: "10vh",
    opacity: 0,
    transition: { duration: 0.2 },
  },
  in: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.3 },
  },
  out: {
    y: "-10vh",
    opacity: 0,
    transition: { type: "spring", duration: 0.2 },
  },
};

export const pageTransition = {
  duration: 0.6,
  type: "spring",
};
