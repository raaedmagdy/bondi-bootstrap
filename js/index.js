let switcherLi = document.querySelectorAll(".our-work .switcher li");
let imgs = document.querySelectorAll(".box img");
console.log(imgs);

switcherLi.forEach((li) => {
  li.addEventListener("click", removeactive);
  li.addEventListener("click", manageImgs);
});

// remove active class from all lis
function removeactive() {
  switcherLi.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// manage images
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
