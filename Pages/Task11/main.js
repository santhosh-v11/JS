
const quoteEl = document.getElementById("qt");
const authoreEl = document.getElementById("author")
const btnEl = document.getElementById("btn");
const api = "https://dummyjson.com/quotes";
let quotes= [];
// console.log(quoteEl.innerText)

btnEl.addEventListener('click',genquotes)

function genquotes(){
    let index = Math.floor(Math.random() * quotes.length)
    console.log(index);
    quoteEl.innerHTML = `<i class="fa-solid fa-quote-left "></i> ${quotes[index].quote} <i class="fa-solid fa-quote-right"></i>`;
    authoreEl.innerText = quotes[index].author
    
}
// genquotes();

async function getquotes() {
    let res = await fetch(api)
    let data = await res.json()
    // console.log(data)
    quotes = data.quotes;
    // console.log(quotes[2].quote)

    
}

getquotes()