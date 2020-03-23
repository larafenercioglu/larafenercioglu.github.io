let currentlySelected = 0;
const imgs = document.querySelectorAll(".gallery-img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener('click', function(){
    imgs[currentlySelected].classList.remove("active");
    currentlySelected--;
    imgs[currentlySelected].classList.add("active");
    nextButton.disabled = false;
    if(currentlySelected === 0){
        prevButton.disabled = true;
    }
});

nextButton.addEventListener('click', function(){
    imgs[currentlySelected].classList.remove("active");
    currentlySelected++;
    imgs[currentlySelected].classList.add("active");
    prevButton.disabled = false;

    if(currentlySelected === imgs.length - 1){
        nextButton.disabled = true;
    }
});