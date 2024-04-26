const btn = document.querySelector("#hamburger");
const content = document.querySelector("#sidebarNav");
const btn2Exit = document.querySelector("#exitBtn");

function toggleFunc() {
  if (content.classList.contains("active")) {
    content.classList.remove("active");
  } else {
    content.classList.add("active");
  }
}
btn.addEventListener("click", toggleFunc);

function toggleFunc() {
  if (content.classList.contains("active")) {
    content.classList.remove("active");
  } else {
    content.classList.add("active");
  }
}
btn2Exit.addEventListener("click", toggleFunc);
