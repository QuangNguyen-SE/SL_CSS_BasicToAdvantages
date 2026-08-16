const getInput = document.querySelector(".myInput");
const printOutput = document.querySelector(".output");

function showOutInput(){
    return printOutput.textContent=getInput.value;    
}