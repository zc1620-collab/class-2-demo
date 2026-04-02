const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const question1 = document.getElementById("question1");
const nextBtn2 = document.getElementById("nextBtn");
const question2 = document.getElementById("question2");
const nextBtn3 = document.getElementById("nextBtn2");
const question3 = document.getElementById("question3");
const nextBtn4 = document.getElementById("nextBtn3");
const question4 = document.getElementById("question4");
const nextBtn5 = document.getElementById("nextBtn4");
const question5 = document.getElementById("question5");
const nextBtn6 = document.getElementById("nextBtn5");
const question6 = document.getElementById("question6");
const nextBtn7 = document.getElementById("nextBtn6");

const img1 = document.getElementById("img1"); 
const img2 = document.getElementById("img2"); 
const img3 = document.getElementById("img3"); 
const img4 = document.getElementById("img4"); 
const img5 = document.getElementById("img5"); 
const img6 = document.getElementById("img6"); 

const btn1 = document.getElementById("btn1"); 
const btn2 = document.getElementById("btn2"); 
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4"); 
const btn5 = document.getElementById("btn5"); 
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7"); 
const btn8 = document.getElementById("btn8"); 
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10"); 
const btn11 = document.getElementById("btn11");

const numberOfLeaves = 5;

for (let i = 0; i < numberOfLeaves; i++) {
  const leaf = document.createElement("img");
  leaf.src = "https://symbl-cdn.com/i/webp/77/ec9b6d839eb7a9868c98b397842442.webp";
  leaf.classList.add("leaf");

  leaf.style.left = `${Math.random() * 90}vw`;
  leaf.style.animationDelay = `${Math.random() * 5}s`;

  document.body.appendChild(leaf);
}

startBtn.addEventListener("click", () => {
  startScreen.classList.add("flip-out");

  setTimeout(() => {
    startScreen.style.display = "none";
    question1.style.display = "block";
    question1.classList.add("flip-in");
  }, 500);
});

const container = document.querySelector(".container");

img1.addEventListener("click", () => {
  img1.classList.toggle("flipped");
  alert("✅ Correct!");
  container.style.backgroundColor = "lightgreen";
});

[img2, img3].forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("flipped");
    alert("❌ Incorrect!");
    container.style.backgroundColor = "#ffcccc";
  });
});

nextBtn.addEventListener("click", () => {
  question1.classList.add("flip-out");

  setTimeout(() => {
    question1.style.display = "none";
    question2.style.display = "block";
    question2.classList.add("flip-in");
  }, 500);
});

btn1.addEventListener("click", () => {
  result2.textContent = "✅ Correct!";
  result2.style.color = "green";
  container.style.backgroundColor = "lightgreen";
});

[btn2, btn3].forEach(btn => {
  btn.addEventListener("click", () => {
    result2.textContent = "❌ Incorrect!";
    result2.style.color = "red";
    container.style.backgroundColor = "#ffcccc";
  });
});
