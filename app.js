let screen = document.getElementById("screen");

function screenClear(){
    screen.value = "";
}

function clickValue(value){
    screen.value += value;
}

function calculate() {
    var totalValue = eval(screen.value);
    screen.value = totalValue;
}