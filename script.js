let counter = 0;
document.addEventListener("DOMContentLoaded", scriptInit);
const counterEl = document.querySelector("b");

function scriptInit() {
  const btn = document.querySelector("button");

  counterEl.innerText = counter;

  btn.addEventListener("click", debounce(clickCounter, 250));
}

const updateCounter = () => {
  counter = counter + 1;
  counterEl.innerText = counter;
};

const clickCounter = () => {
  console.log("clicked");

  updateCounter();
};

const debounce = (func, delay) => {
  let timerId;

  console.log(`inital ${timerId}`);

  return (...args) => {
    if (timerId) clearTimeout(timerId);

    console.log(`prev ${timerId}`);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
