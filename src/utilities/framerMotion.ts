export const pageVariants = {
  initial: {
    x: "100vw",
  },
  in: {
    opacity: 1,
    x: "0",
    transition: { type: "spring", duration: 1 },
  },
  out: {
    x: "-100vw",
    transition: { duration: 0.6 },
  },
};
export const feedbackEditVariants = {
  initial: {
    x: "100vw",
  },
  in: {
    opacity: 1,
    x: "0",
    transition: { type: "spring", duration: 1 },
  },
  out: {
    opacity: 0,
  },
};
export const roadMapVariants = {
  list: {
    initial: {
      x: "100vw",
    },
    in: {
      x: "0",
      transition: { type: "spring", duration: 1 },
    },
    out: {
      x: "-100vw",
      opacity: 0,
      transition: { duration: 0.5 },
    },
  },
};
export const emptyVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, type: "spring", duration: 0.5 },
  },
};
export const feedbackVariants = {
  stop: {
    opacity: 1,
    y: 0,
  },
  initial: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.2 },
  },
  in: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.1, duration: 0.5 },
  },
  out: {
    y: 20,
    opacity: 0,
    transition: { type: "spring", duration: 0.5 },
  },
};

export const pageTransition = {
  type: "spring",
};
