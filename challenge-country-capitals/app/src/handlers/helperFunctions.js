import { optionsClassName } from "../data/constants";

export function generateRandomIndex(data) {
  const numberOfCountries = data.length;
  return Math.floor(Math.random() * numberOfCountries);
}

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export function getRandomChoices(rightAnswer, data) {
  const choices = [rightAnswer];
  for (let n = 1; n <= 5; n++) {
    const index = generateRandomIndex(data);
    if (data[index].capital === rightAnswer) {
      n--;
      continue;
    }
    choices.push(data[index].capital);
  }
  return shuffleArray(choices);
}

export const resetOptions = () => {
  const options = document.querySelectorAll(`.${optionsClassName}`);
  options.forEach((option) => {
    option.disabled = false;
    option.style.backgroundColor = "lightGray";
  });
};

export const disableOptions = () => {
  const options = document.querySelectorAll(`.${optionsClassName}`);
  options.forEach((el) => (el.disabled = true));
  return options;
};
