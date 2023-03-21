const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Don't watch the clock; do what it does. Keep going.",
  "You are never too old to set another goal or to dream a new dream.",
  "If you can dream it, you can do it.",
  "Never give up, for that is just the place and time that the tide will turn.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
];

const quote = document.querySelector(".quote");
const input = document.querySelector(".input");

let startTime;

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function startGame() {
  const randomQuote = getRandomQuote();
  quote.innerText = randomQuote;
  input.value = "";
  startTime = new Date();
}

function endGame() {
  const endTime = new Date();
  const totalTime = (endTime - startTime) / 1000;
  const totalWords = input.value.trim().split(" ").length;
  const speed = Math.round((totalWords / totalTime) * 60);
  alert(`You typed at a speed of ${speed} words per minute!`);
}

input.addEventListener("input", () => {
  const currentInput = input.value;
  const currentQuote = quote.innerText;
  if (currentInput === currentQuote) {
    endGame();
  } else if (currentQuote.startsWith(currentInput)) {
    input.classList.remove("incorrect");
    input.classList.add("correct");
  } else {
    input.classList.remove("correct");
    input.classList.add("incorrect");
  }
});

startGame();
input.focus();
