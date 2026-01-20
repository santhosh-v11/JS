// 🔹 DOM Elements
const incBtnEl = document.getElementById("inc");
const decBtnEl = document.getElementById("dec");
const quantityInputEl = document.getElementById("qun");

// 🔹 State
let quantity = Number(quantityInputEl.value);

// 🔹 Update Input UI
function updateQuantityUI() {
  quantityInputEl.value = quantity;
}

// ➕ Increment
incBtnEl.addEventListener("click", () => {
  if (quantity < 9) {
    quantity++;
    updateQuantityUI();
  }
});

// ➖ Decrement
decBtnEl.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    updateQuantityUI();
  }
});

// ✍️ Manual Input Safety
quantityInputEl.addEventListener("input", () => {
  let value = Number(quantityInputEl.value);

  if (value < 1) value = 1;
  if (value > 9) value = 9;

  quantity = value;
  updateQuantityUI();
});
