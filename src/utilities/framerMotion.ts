export const pageVariants = {
  initial: {
    opcity: 0,
    x: "30vw",
  },
  in: {
    opacity: 1,
    x: "0",
  },
  out: {
    opacity: 0,
    x: "-30vw",
  },
};
// export const feedbackVariants = {
//   initial: {
//     opcity: 0,
//     y: "-3vh",
//   },
//   in: {
//     opacity: 1,
//     y: "0",
//   },
//   out: {
//     opacity: 0,
//     y: "3vh",
//   },
// };
export const pageTransition = {
  duration: 0.7,
  type: "spring",
};
