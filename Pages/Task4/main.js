const btnEl = document.getElementById("btn");
const msgEl = document.getElementById("msg");
const nameEl = document.getElementById("name")

btnEl.addEventListener('click',()=>{
  nameEl.value.length >= 3 ?  msg.innerText=`Hi ${nameEl.value}, Welcome to cyberdude` : alert("Name muse be 3 Letters");
})

