const arrow = document.querySelectorAll("i");
const workout = document.querySelectorAll(".workout");

arrow.forEach((item) => {
  item.style.display = "none";
});

workout.forEach((item) =>
  item.addEventListener("mouseover", function (e) {
    e.target.children[0].children[1].children[0].classList.add("show");
  })
);

workout.forEach((item) =>
  item.addEventListener("mouseout", function (e) {
    e.target.children[0].children[1].children[0].classList.remove("show");
  })
);
