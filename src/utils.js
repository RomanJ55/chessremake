export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const animateError = (element, errorText) => {
  element.value = errorText;
  element.animate(
    [
      { opacity: 0, color: "#ff7300" }, // from
      { opacity: 1, color: "#f00" }, // to
    ],
    2000 // time
  );
};
