cardSideFront = document.querySelector('.front');
cardSideBack = document.querySelector('.back');
function CardRem(){
    cardSideFront.addEventListener('click', ()=>{
        cardSideFront.style.transform = 'rotateY(180deg)';
        cardSideBack.style.transform = 'rotateY(0deg)';
    })
    cardSideBack.addEventListener('click', ()=>{
        cardSideFront.style.transform = 'rotateY(0deg)';
        cardSideBack.style.transform = 'rotateY(180deg)';
    })
}
CardRem()