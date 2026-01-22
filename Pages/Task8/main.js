const inputel = document.getElementById("qt");
const addBtnel = document.getElementById("addQuoteBtn");
const quotesContainer = document.getElementById("quotesContainer");

addBtnel.addEventListener("click", () => {
  const quoteText = inputel.value.trim();
  if (quoteText === "") {
    alert("Please write a quote first!");
    return;
  }
  const p = document.createElement("p");
  p.textContent = quoteText;
  p.className = "bg-yellow-200 rounded-lg p-2 border-l-4 border-l-yellow-500";
  quotesContainer.appendChild(p);
  inputel.value = "";
});
