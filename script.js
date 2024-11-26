document.querySelectorAll(".question-answer").forEach((container) => {
  container.addEventListener("click", () => {
    const minus = container.querySelector(".minus");
    const plus = container.querySelector(".plus");
    const answer = container.querySelector(".answer");
    minus.classList.toggle("hide");
    plus.classList.toggle("hide");
    answer.classList.toggle("hide");
  });
});
