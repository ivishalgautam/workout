const arrow = document.querySelectorAll("i");
const workouts = document.querySelectorAll(".workout");

// workouts.forEach(item => {})

arrow.forEach((item) => {
  item.style.display = "none";
});

workouts.forEach((item) =>
  item.addEventListener("mouseover", function (e) {
    e.target.children[0].children[1].children[0].classList.add("show");
  })
);

workouts.forEach((item) =>
  item.addEventListener("mouseout", function (e) {
    e.target.children[0].children[1].children[0].classList.remove("show");
  })
);
