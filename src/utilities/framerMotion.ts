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
export const feedbackVariants = {
  stop: {
    opacity: 1,
    x: 0,
  },
  initial: {
    x: 50,
    opacity: 0,
    transition: { type: "spring", duration: 0.5 },
  },
  in: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.3 },
  },
  out: {
    x: -50,
    opacity: 0,
    transition: { type: "spring", duration: 0.5 },
  },
};

export const pageTransition = {
  duration: 0.6,
  type: "spring",
};
export const feedbackTransition = {
  duration: 0.4,
  type: "spring",
};
