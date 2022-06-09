function screenClear(){
    document.getElementById("screen").value = "";
}

function clickValue(value){
    document.getElementById("screen").value += value;
}

function calculate() {
    var p = document.getElementById("screen").value;
    var q = eval(p);
    document.getElementById("screen").value = q;
   }