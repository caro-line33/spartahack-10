// Lisa added this
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

const confirmButton = document.getElementById('confirmButton');
let creditLimit = 0;
const buttons = Array.from(document.getElementsByClassName('diffButton'));

buttons.forEach(button => {
    button.addEventListener('click', saveDifficulty);
});

function saveDifficulty(event) {
    creditLimit = parseInt(event.target.value, 10);
    console.log(creditLimit);
    buttons.forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
}

confirmButton.addEventListener('click', nextPage);

function nextPage(){
    if(creditLimit !== 0){
        localStorage.setItem("creditLimit", creditLimit);
        window.location.href = "page4.html"; 
    }
    else{
        alert('enter a value please');
    }
}
