
const textareaEl = document.getElementById("text");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const sentencecase = document.getElementById("sentencecase");
const titlecase = document.getElementById("titlecase");
const clearBtn = document.getElementById("clrbtn");

const checkboxes = [uppercase, lowercase, sentencecase, titlecase];


function uncheckOthers(activeCheckbox) {
  checkboxes.forEach(cb => {
    if (cb !== activeCheckbox) cb.checked = false;
  });
}

clearBtn.addEventListener("click", () => {
  textareaEl.value = "";
  checkboxes.forEach(cb => (cb.checked = false));
});



uppercase.addEventListener("change", () => {
  if (uppercase.checked) {
    uncheckOthers(uppercase);
    textareaEl.value = textareaEl.value.toUpperCase();
  }
});

lowercase.addEventListener("change", () => {
  if (lowercase.checked) {
    uncheckOthers(lowercase);
    textareaEl.value = textareaEl.value.toLowerCase();
  }
});
function toSentenceCase(text) {
  return text
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());
}

function toTitleCase(text) {
  return text
    .toLowerCase().split(" ").map(word => word ? word[0].toUpperCase() + word.slice(1) : "").join(" ");
}

sentencecase.addEventListener("change", () => {
  if (sentencecase.checked) {
    uncheckOthers(sentencecase);
    textareaEl.value = toSentenceCase(textareaEl.value);
  }
});

titlecase.addEventListener("change", () => {
  if (titlecase.checked) {
    uncheckOthers(titlecase);
    textareaEl.value = toTitleCase(textareaEl.value);
  }
});

