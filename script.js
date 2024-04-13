const div = document.getElementById("parentDiv");
const img = document.getElementById("img");
const arrowR = document.getElementById("arrowRigth");
const arrowL = document.getElementById("arrowLeft");

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

let n = 0;
let picArr = [
  "./Pictures/Nissan-GT-R_Nismo-2020-1280-01-1046x616.2.jpg",
  "./Pictures/Mazda rx-7.10.jpg",
  "./Pictures/Toyota-Supra-MK4.2.jpg",
];

img.src = picArr[0];

let btn = document.getElementById(`btn0`);
btn.classList.add("btnN");

btn0.addEventListener("click", () => {
  img.src = picArr[0];
  btn0.classList.add("btnN");
  btn1.classList.remove("btnN");
  btn2.classList.remove("btnN");
  n = 0;
});
btn1.addEventListener("click", () => {
  img.src = picArr[1];
  btn0.classList.remove("btnN");
  btn1.classList.add("btnN");
  btn2.classList.remove("btnN");
  n = 1;
});
btn2.addEventListener("click", () => {
  img.src = picArr[2];
  btn0.classList.remove("btnN");
  btn1.classList.remove("btnN");
  btn2.classList.add("btnN");
  n = 2;
});

arrowR.addEventListener("click", () => {
  btn = document.getElementById(`btn${n}`);
  btn.classList.remove("btnN");
  if (n + 1 <= picArr.length - 1) {
    n++;
  } else {
    n = 0;
  }
  img.src = picArr[n];
  btn = document.getElementById(`btn${n}`);
  btn.classList.add("btnN");
});

arrowL.addEventListener("click", () => {
  btn = document.getElementById(`btn${n}`);
  btn.classList.remove("btnN");
  if (n - 1 >= 0) {
    n--;
  } else {
    n = picArr.length - 1;
  }
  img.src = picArr[n];
  btn = document.getElementById(`btn${n}`);
  btn.classList.add("btnN");
});