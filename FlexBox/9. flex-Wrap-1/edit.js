function myFunction(){
    let choice = document.getElementById("userSelect").value;
    document.getElementsByClassName("flex-box")[0].style.flexDirection = choice;
}