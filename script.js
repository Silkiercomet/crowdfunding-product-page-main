const circles = document.querySelector(".circle");
const backgroundSwitch = document.querySelector('.bookmark-inside');
const words = document.querySelector('.switch');
const options = document.querySelectorAll(".check-pledge")
const downCard = document.querySelectorAll('.down-card')

const toggleButtom = () => {
    circles.classList.toggle("active")
    words.classList.toggle("active")
    backgroundSwitch.classList.toggle("active2")
}

const showHidden = (x) => {
    if(options[x].checked == true){
        downCard[x].classList.toggle("hidden")
    }
    else{
        downCard[x].classList.toggle("hidden")
    }
} 
const Toggler1 = () => {
    showHidden(0)
}
const Toggler2 = () => {
    showHidden(1)
}
const Toggler3 = () => {
    showHidden(2)
    console.log(options[2].checked)
}


words.addEventListener("click", toggleButtom);
options[0].addEventListener("click" , Toggler1);
options[1].addEventListener("click" , Toggler2);
options[2].addEventListener("click" , Toggler3);