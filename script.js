let btn = document.querySelector('.btn');
let text = document.querySelector('.text');
//3
let input = document.getElementById('result');

function start() {
    window.setInterval(timer, 1000);
}

function timer() {
    input.value = input.value * input.value;
}


//4
let p = document.getElementById('text');
window.setInterval(func, 1000);

function func() {
    if (p.style.color == 'red') {
        p.style.color = 'green';
    } else {
        p.style.color = 'red';
    }
}

//1
btn.addEventListener('click', function () {
    setTimeout(function () {
        text.textContent = text.textContent + 1;
    }, 1000)
})
