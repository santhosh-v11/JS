
const formEl = document.getElementById("form");
const submitEl = document.getElementById("submit");
const nameEL = document.getElementById("name");
const roleEL = document.getElementById("job");
const userlist = document.getElementById("userlist")
submitEl.addEventListener("click",(e)=>{
    e.preventDefault();
    const name = nameEL.value;
    const role = roleEL.value;
    userlist.innerHTML = `<div class="p-5"><p class="font-semibold">Hi ${name} and your role is ${role}</p></div>`;
    console.log(name)
})
function submit(){
    console.log("done")
}