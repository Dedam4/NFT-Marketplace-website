let burger = document.querySelector('.nav-toggle');
let menuActive = document.querySelector('.menu__list');
let questionsItems = document.querySelectorAll('.questions__item');
let questionsName = document.querySelectorAll('.questions__name');
let accordion = document.querySelectorAll('.accordion')

let accordionHeader = document.querySelectorAll('.accordion__header')
let accordionItem = document.querySelectorAll('.accordion__item');


    


let index = 0;
questionsItems.forEach( item =>{
 
    item.addEventListener('click', () => {
        clearActiveSlasses();
        item.classList.toggle('active');

      
    });

});
function clearActiveSlasses()
{
    questionsItems.forEach((item) =>{
        item.classList.remove('active');
    })
         
}
function changeAccordionItems(item){
    
    if(item === questionsItems[1]) {
      


    }

}




accordionItem.forEach( item =>{
 
    item.addEventListener('click', () => {
      
            item.classList.toggle('active');

     
       
       
       

    });

});
accordionHeader.forEach( item =>{
 
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        
       

    });

});


burger.addEventListener('click', event => {
    event.preventDefault();
    
    burger.classList.toggle('active');
    menuActive.classList.toggle('active')

    
    
});