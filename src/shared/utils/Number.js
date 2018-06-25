export const getRandomNumber = (max,previousNumber) => {
  let random = Math.floor(Math.random() * (max));
  if(random === previousNumber) return this.getRandomNumber();
  return random;
}
