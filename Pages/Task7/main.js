let input = document.getElementById('pass');
let eyeEl = document.getElementById('eye-icon');
eyeEl.addEventListener('click', function () {
    if (input.type === 'password') {
        input.type = 'text';
        eyeEl.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        input.type = 'password';
        eyeEl.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
})