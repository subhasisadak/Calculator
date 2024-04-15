let display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    display.focus();
}

function clearDisplay(){
    display.value = "";
}

function deleteOne(){
    display.value = display.value.toString().slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error";
    }
}


document.addEventListener("keydown", function(e){
    console.log("clicked");
    console.log(e.key);
    if(e.key === '0' || e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '.' || e.key === '/' || e.key === '*' || e.key === '-' || e.key === '+') appendToDisplay(e.key);

    else if(e.key === "Escape") clearDisplay();

    else if(e.key === "Backspace") deleteOne();

    else if(e.key === "=" || e.key === "Enter") calculate();
})