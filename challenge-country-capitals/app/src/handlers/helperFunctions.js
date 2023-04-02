import { optionsClassName } from "../data/constants";

export function getRandomCountry(data) {
  const numberOfCountries = data.length;
  return data[Math.floor(Math.random() * numberOfCountries)];
}
export function getRandomCountryIndex(data) {
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
    const index = getRandomCountryIndex(data);
    if (data[index].capital === rightAnswer) {
      n--;
      continue;
    }
    choices.push(data[index].capital);
  }
  return shuffleArray(choices);
}

export function createAQuestion(data) {
  const { name: countryName, capital: rightAnswer } = getRandomCountry(data);
  console.log({ countryName, rightAnswer });
  const options = getRandomChoices(rightAnswer, data);

  return { countryName, rightAnswer, options };
}

export const enableOptions = () => {
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
