// lisa added this
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});

const confirm = document.getElementById('confirmButton');
confirm.disabled = true;

const buttons = document.querySelectorAll('.myButton');
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

let difficulty = "";

function handleClick(this){
    console.log()
}



  