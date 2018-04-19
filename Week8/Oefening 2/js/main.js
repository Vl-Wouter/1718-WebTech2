function changeButton() {
    let button = document.getElementById('button');
    let buttons = document.getElementsByName('color');
    let newValue = "";
    for(let i = 0; i < buttons.length; i++) {
        if(buttons[i].checked) {
            newValue = buttons[i].value;
        }
    }
    console.log(newValue);
    button.className = newValue != "" ? `btn ${newValue}` : 'btn btn-warning';
}


// Event Listener
document.getElementById('button').addEventListener('click', changeButton);