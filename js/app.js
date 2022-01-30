let burger = document.querySelector('.nav-toggle');
let menuActive = document.querySelector('.menu__list');
let questionsItems = document.querySelectorAll('.questions__item');
let questionsName = document.querySelectorAll('.questions__name');
let accordion = document.querySelectorAll('.accordion')

let accordionHeader = document.querySelectorAll('.accordion__header')
let accordionItem = document.querySelectorAll('.accordion__item');

let populerLinks = document.querySelectorAll('.populer__link');
let itemPopuler = document.querySelectorAll('.item_populer');


/*Filter for populer block*/ 
populerLinks.forEach(item => {


    item.addEventListener('click', (e) => {
        e.preventDefault();
        let filterClass = e.target.dataset['f'];
        itemPopuler.forEach(index => {
            index.classList.remove('hide');
            if(!index.classList.contains(filterClass) && filterClass != 'all'){
                index.classList.add('hide');
            }


        });
    });
});





questionsItems.forEach(item => {

    item.addEventListener('click', () => {
        clearActiveSlasses();
        item.classList.toggle('active');


    });

});
function clearActiveSlasses() {
    questionsItems.forEach((item) => {
        item.classList.remove('active');
    })

}
function changeAccordionItems(item) {

    if (item === questionsItems[1]) {



    }

}

accordionItem.forEach(item => {

    item.addEventListener('click', () => {

        item.classList.toggle('active');


    });

});
accordionHeader.forEach(item => {

    item.addEventListener('click', () => {
        item.classList.toggle('active');


    });

});

/*Burger menu*/ 
burger.addEventListener('click', event => {
    event.preventDefault();

    burger.classList.toggle('active');
    menuActive.classList.toggle('active')



});