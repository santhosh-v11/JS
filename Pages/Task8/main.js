const quoteInput = document.getElementById("quoteInput");
const addBtn = document.getElementById("addQuoteBtn");
const quotesList = document.getElementById("quotesList");
const favList = document.getElementById("favList");

let quotes = [];

// 🔁 RENDER
function render() {
  quotesList.innerHTML = "";
  favList.innerHTML = "";

  quotes.forEach((quote, index) => {
    const card = document.createElement("div");
    card.className =
      "flex justify-between items-center p-3 border rounded-lg " +
      (quote.fav ? "bg-yellow-50" : "bg-gray-50");

    const text = document.createElement("span");
    text.textContent = quote.text;
    text.className = "text-gray-800";

    const actions = document.createElement("div");
    actions.className = "flex gap-2";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className =
      "text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300";
    editBtn.onclick = () => editQuote(index);

    const favBtn = document.createElement("button");
    favBtn.textContent = quote.fav ? "Unfav" : "Fav";
    favBtn.className =
      "text-sm px-3 py-1 rounded bg-pink-500 text-white hover:bg-pink-600";
    favBtn.onclick = () => toggleFav(index);

    actions.append(editBtn, favBtn);
    card.append(text, actions);

    quotesList.appendChild(card);

    if (quote.fav) {
      favList.appendChild(card.cloneNode(true));
    }
  });
}

// ➕ ADD
addBtn.addEventListener("click", () => {
  const value = quoteInput.value.trim();
  if (!value) return;

  quotes.push({ text: value, fav: false });
  quoteInput.value = "";
  render();
});

// ✏️ EDIT
function editQuote(index) {
  const updated = prompt("Edit quote:", quotes[index].text);
  if (updated && updated.trim()) {
    quotes[index].text = updated.trim();
    render();
  }
}

// ❤️ FAVORITE
function toggleFav(index) {
  quotes[index].fav = !quotes[index].fav;
  render();
}
