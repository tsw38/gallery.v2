// History actions
export const onHistoryChange = () => {
  if (window) {
    window.onpopstate = function(event) {
      alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
    };
  }
}

export const getRandomNumber = (max,previousNumber) => {
  let random = Math.floor(Math.random() * (max));
  if(random === previousNumber) return this.getRandomNumber();
  return random;
}
