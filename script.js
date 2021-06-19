const circles = document.querySelector(".circle");
const backgroundSwitch = document.querySelector('.bookmark-inside');
const words = document.querySelector('.switch');
const options = document.querySelectorAll(".check-pledge");
const downCard = document.querySelectorAll('.down-card');
const cardShow = document.querySelectorAll('.checks');
const backTiers = document.querySelector('.back-tiers');
const thanks = document.querySelectorAll('.btn-2');
const thanksCard = document.querySelector('.thanks-card');
const thanksBtn = document.querySelector('.btn-1')

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
const showCard = (x) =>{
    x.classList.toggle("hidden")
}



words.addEventListener("click", toggleButtom);

options[0].addEventListener("click" , function(){showHidden(0)});
options[1].addEventListener("click" , function(){showHidden(1)});
options[2].addEventListener("click" , function(){showHidden(2)});

cardShow[0].addEventListener("click" , function(){showCard(backTiers)});
cardShow[1].addEventListener("click" , function(){showCard(backTiers)});

thanks[0].addEventListener("click" , function(){showCard(thanksCard);
    showCard(backTiers)});
thanks[1].addEventListener("click" , function(){showCard(thanksCard);
    showCard(backTiers)});
thanks[2].addEventListener("click" , function(){showCard(thanksCard);
    showCard(backTiers)});

thanksBtn.addEventListener("click", function(){showCard(thanksCard)})
