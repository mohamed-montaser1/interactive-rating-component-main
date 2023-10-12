const submit = document.querySelector("button#submit");
const steps = Array.from(document.querySelectorAll("h2"));
const container = document.getElementById("container");
const rateSpan = document.getElementById("rate");

let rate = 0;

steps.forEach((step) => {
  step.onclick = () => {
    steps.forEach((el) => el.classList.remove("active"));
    step.classList.add("active");
    rate = +step.innerHTML;
  };
});

submit.onclick = () => {
  if (rate == 0) {
    return;
  }
  container.classList.add("fade-out");
  rateSpan.innerHTML = rate;
};
