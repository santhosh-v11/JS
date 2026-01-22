let bodyEl = document.body;
const randomEl = document.getElementById("random");
function hex(){
  let color = "#";
  const value = "0123456789abcdef"
  for(let i=0; i<6; i++){
    color += `${value[Math.floor(Math.random()*16)]}` 
  }
  return color;
}

randomEl.addEventListener("click",()=>{
  let color = hex();
  bodyEl.style.backgroundColor = color;
  console.log(color)
})

function clearBgClasses() {
  bodyEl.classList.remove(
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-violet-500",
    "bg-pink-300","bg-white"
  );
}

const redEl = document.getElementById("red");
redEl.addEventListener("click",()=>{
  bodyEl.style.backgroundColor = "";
  clearBgClasses();
  bodyEl.classList.add("bg-red-500")
})
const greenEl = document.getElementById("green");
greenEl.addEventListener("click",()=>{
  bodyEl.style.backgroundColor = "";
  clearBgClasses();
  bodyEl.classList.add("bg-green-500")
})
const blueEl = document.getElementById("blue");
blueEl.addEventListener("click",()=>{
  bodyEl.style.backgroundColor = "";
  clearBgClasses();
  bodyEl.classList.add("bg-blue-500")
})
const violetEl = document.getElementById("violet");
violetEl.addEventListener("click",()=>{
  bodyEl.style.backgroundColor = "";
  clearBgClasses();
  bodyEl.classList.add("bg-violet-500")
})
const pinkEl = document.getElementById("pink");
pinkEl.addEventListener("click",()=>{
  bodyEl.style.backgroundColor = "";
  clearBgClasses();
  bodyEl.classList.add("bg-pink-300")
})