const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const question1 = document.getElementById("question1");
const nextBtn2 = document.getElementById("nextBtn2");
const question2 = document.getElementById("question2");
const nextBtn3 = document.getElementById("nextBtn3");
const question3 = document.getElementById("question3");
const nextBtn4 = document.getElementById("nextBtn4");
const question4 = document.getElementById("question4");
const nextBtn5 = document.getElementById("nextBtn5");
const question5 = document.getElementById("question5");
const nextBtn6 = document.getElementById("nextBtn6");
const question6 = document.getElementById("question6");
const nextBtn7 = document.getElementById("nextBtn7");

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

const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const result4 = document.getElementById("result4");
const result5 = document.getElementById("result5");
const result6 = document.getElementById("result6");

const numberOfLeaves = 5;

for (let i = 0; i < numberOfLeaves; i++) {
  const leaf = document.createElement("img");
  leaf.src = "https://symbl-cdn.com/i/webp/77/ec9b6d839eb7a9868c98b397842442.webp";
  leaf.classList.add("leaf");

  leaf.style.left = `${Math.random() * 90}vw`;
  leaf.style.animationDelay = `${Math.random() * 5}s`;

  document.body.appendChild(leaf);
}

let score = 0;

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
  result.textContent = "✅ Correct!";
  result.style.color = "green";
  container.style.backgroundColor = "lightgreen";
  score++;
  }, { once: true });

[img2, img3].forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("flipped");
    result.textContent = "❌ Incorrect!";
    result.style.color = "red";
    container.style.backgroundColor = "#ffcccc";
  });
});

nextBtn2.addEventListener("click", () => {
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
  score++;
  }, { once: true });

[btn2, btn3].forEach(btn => {
  btn.addEventListener("click", () => {
    result2.textContent = "❌ Incorrect!";
    result2.style.color = "red";
    container.style.backgroundColor = "#ffcccc";
  });
});

nextBtn3.addEventListener("click", () => {
  question2.classList.add("flip-out");

  setTimeout(() => {
    question2.style.display = "none";
    question3.style.display = "block";
    question3.classList.add("flip-in");
  }, 500);
});

btn5.addEventListener("click", () => {
  result3.textContent = "✅ Correct!";
  result3.style.color = "green";
  container.style.backgroundColor = "lightgreen";
  score++;
  }, { once: true });

[btn4, btn6].forEach(btn => {
  btn.addEventListener("click", () => {
    result3.textContent = "❌ Incorrect!";
    result3.style.color = "red";
    container.style.backgroundColor = "#ffcccc";
  });
});

nextBtn4.addEventListener("click", () => {
  question3.classList.add("flip-out");

  setTimeout(() => {
    question3.style.display = "none";
    question4.style.display = "block";
    question4.classList.add("flip-in");
  }, 500);
});

btn8.addEventListener("click", () => {
  result4.textContent = "✅ Correct!";
  result4.style.color = "green";
  container.style.backgroundColor = "lightgreen";
  score++;
  }, { once: true });

[btn7].forEach(btn => {
  btn.addEventListener("click", () => {
    result4.textContent = "❌ Incorrect!";
    result4.style.color = "red";
    container.style.backgroundColor = "#ffcccc";
  });
});

nextBtn5.addEventListener("click", () => {
  question4.classList.add("flip-out");

  setTimeout(() => {
    question4.style.display = "none";
    question5.style.display = "block";
    question5.classList.add("flip-in");
  }, 500);
});

btn9.addEventListener("click", () => {
  result5.textContent = "✅ Correct!";
  result5.style.color = "green";
  container.style.backgroundColor = "lightgreen";
  score++;
  }, { once: true });

[btn10, btn11].forEach(btn => {
  btn.addEventListener("click", () => {
    result5.textContent = "❌ Incorrect!";
    result5.style.color = "red";
    container.style.backgroundColor = "#ffcccc";
  });
});

nextBtn6.addEventListener("click", () => {
  question5.classList.add("flip-out");

  setTimeout(() => {
    question5.style.display = "none";
    question6.style.display = "block";
    question6.classList.add("flip-in");
  }, 500);
});

img6.addEventListener("click", () => {
  img6.classList.toggle("flipped");
  result6.textContent = "✅ Correct!";
  result6.style.color = "green";
  container.style.backgroundColor = "lightgreen";
  score++;
  }, { once: true });

[img4, img5].forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("flipped");
    result6.textContent = "❌ Incorrect!";
    result6.style.color = "red";
    container.style.backgroundColor = "#ffcccc";
  });
});

const finalScreen = document.getElementById("finalScreen");
const finalScore = document.getElementById("finalScore");

nextBtn7.addEventListener("click", () => {
  question6.classList.add("flip-out");

  setTimeout(() => {
    question6.style.display = "none";
    finalScreen.style.display = "block";
    finalScreen.classList.add("flip-in");

    finalScore.textContent = score + " / 6";
  }, 500);
  
  if (score === 6) {
  finalScore.textContent = "🌿 Perfect! 6/6 – Leaf Cutter Expert!";
} else if (score >= 4) {
  finalScore.textContent = "🐜 Nice! " + score + "/6";
} else {
  finalScore.textContent = "🌱 Keep learning! " + score + "/6";
}
});
