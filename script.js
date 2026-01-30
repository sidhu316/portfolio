/* TYPEWRITER */
const nameText = "Siddharth Makwana";
let i = 0;
const speed = 110;
const nameEl = document.getElementById("typewriter");

function typeWriter() {
  if (i < nameText.length) {
    nameEl.textContent += nameText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

/* HEADER SHOW ON SCROLL */
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("show", window.scrollY > 80);
});

/* BACKGROUND SLIDESHOW */
const images = [
  "Image/House_max_front.jpg",
  "Image/interior texture 1.jpg",
  "Image/matchbox 1.jpg",
  "Image/matchbox 2.jpg",
  "Image/night_light.jpg",
  "Image/street 1.jpg",
  "Image/street 2.jpg"
];

let current = 0;
const bg = document.querySelector(".bg-slideshow");
bg.style.backgroundImage = `url(${images[0]})`;

setInterval(() => {
  current = (current + 1) % images.length;
  bg.style.backgroundImage = `url(${images[current]})`;
}, 6000);
