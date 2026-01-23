const textEl = document.getElementById("lan");
const listEl = document.querySelectorAll("li");

// console.log(listEl[0].innerText)
// console.log(listEl.length)
textEl.addEventListener('keyup',()=>{
    let input = textEl.value.toLowerCase();
    for(let i=0; i<=listEl.length;i++){
        let text = listEl[i].innerText.toLowerCase();
        console.log(text);
        
        text.includes(input) ? listEl[i].style.display = "" : listEl[i].style.display = "none"; 
    }

    // textEl.value
})