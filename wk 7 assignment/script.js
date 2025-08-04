// --- DOM Element References ---
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultParagraph = document.getElementById("result");
const modeToggleBtn = document.getElementById("mode-toggle");
const body = document.body;

// --- 1. Dark Mode Toggle ---
modeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  modeToggleBtn.innerHTML = isDarkMode 
    ? '<i class="fas fa-sun"></i> Light Mode' 
    : '<i class="fas fa-moon"></i> Dark Mode';
});

// --- 2. Animate Box and Change Shape ---
const shapes = ['square', 'circle', 'triangle'];
let shapeIndex = 0;

animateBtn.addEventListener("click", () => {
  box.classList.remove(...shapes);
  shapeIndex = (shapeIndex + 1) % shapes.length;
  box.classList.add(shapes[shapeIndex]);
});

// Set initial shape
box.classList.add('square');

// --- 3. Calculator Functions ---
function calculate(operation) {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  
  if (isNaN(num1) || isNaN(num2)) {
    resultParagraph.textContent = "Please enter valid numbers.";
    resultParagraph.style.color = 'var(--accent-color)';
    return;
  }
  
  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation.";
  }
  
  resultParagraph.textContent = `Result: ${result}`;
  resultParagraph.style.color = 'var(--secondary-color)';
}

document.getElementById("addBtn").addEventListener("click", () => calculate('add'));
document.getElementById("subtractBtn").addEventListener("click", () => calculate('subtract'));
document.getElementById("multiplyBtn").addEventListener("click", () => calculate('multiply'));
document.getElementById("divideBtn").addEventListener("click", () => calculate('divide'));


// --- 4. Flip Card Function using DOM and class manipulation ---
function flipCard(cardElement) {
  cardElement.classList.toggle("flipped");
}