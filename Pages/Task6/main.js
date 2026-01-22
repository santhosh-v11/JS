
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
  return text.toLowerCase().split(" ").map(word => word ? word[0].toUpperCase() + word.slice(1) : "").join(" ");
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

//task10 countch

const chEl = document.getElementById("ch");
const wordEl = document.getElementById("word");


function updateCount(text) {
  chEl.textContent = text.length;

  const trimmedText = text.trim();
  wordEl.textContent =
    trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;
}

textareaEl.addEventListener("input", (e) => {
  updateCount(e.target.value);
});

//theme task
// const btnEl = document.getElementById("theme");

// btnEl.addEventListener('click',()=>{
//   document.documentElement.classList.toggle("dark");
//   console.log("changed")
// })

const switchToggle = document.querySelector('#switch-toggle');
const themebtnEl = document.getElementById("themebtn");
let isDarkmode = false

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`

const lightIcon =`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>` 

themebtnEl.addEventListener('click',()=>{
  isDarkmode = !isDarkmode
  localStorage.setItem("isDarkmode", isDarkmode)
  switchTheme()
}
)
function switchTheme (){
  if (isDarkmode) {
    switchToggle.classList.remove('bg-yellow-500','-translate-x-2')
    switchToggle.classList.add('bg-gray-700','translate-x-full')
    document.documentElement.classList.toggle("dark");
    setTimeout(() => {
      switchToggle.innerHTML = darkIcon
    }, 250);
  } else {
    switchToggle.classList.add('bg-yellow-500','-translate-x-2')
    switchToggle.classList.remove('bg-gray-700','translate-x-full')
    document.documentElement.classList.toggle("dark");
    setTimeout(() => {
      switchToggle.innerHTML = lightIcon
    }, 250);
  }
}

