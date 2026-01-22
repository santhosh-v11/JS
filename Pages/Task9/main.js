
function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
}

const incBtnEl = document.getElementById("inc");
const decBtnEl = document.getElementById("dec");
const inputEl = document.getElementById("qun");
const cartEL = document.getElementById("cart");
const msgEl = document.getElementById("msg")
let num = 1;
const maxnum = 9;

cartEL.addEventListener('click',()=>{
    msgEl.innerText=`your product ${num} quantity added to the card`;
    msgEl.classList.remove("hidden");

    setTimeout(()=>{
        msgEl.classList.add("hidden")
    },1500)

})
// inputEl.addEventListener('')
function uiupdate(){
    if(num==1){
        decBtnEl.disabled = true;
    }
    else{
        decBtnEl.disabled = false;
    }

}
uiupdate();
incBtnEl.addEventListener('click',()=>{
    if(num < maxnum){
        num++
        inputEl.value = num;
        // console.log(num);
        
    }
    else{
        alert("upto 9 quantity only able to purchase at a time")
    } 
    uiupdate();
})
decBtnEl.addEventListener('click',()=>{
    if(num >1){
        num--;
        inputEl.value = num;
    }
    else{
        alert(" can't place zero order")
        uiupdate()
    }
   

})
