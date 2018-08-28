var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons =document.querySelectorAll('.plan button')
var toggleButton = document.querySelector('.toggle-button');
var mobileNav  = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

// console.dir(selectPlanButtons);
// backdrop.style.display ='block';

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // module.className = 'open';
        modal.classList.add("open");
        backdrop.style.display = 'block';
        setTimeout(function() {
            backdrop.classList.add("open");
        }, 10);
    });
} 

backdrop.addEventListener('click' , function(){
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove("open")
    closeModel();
});

if(modalNoButton){
    modalNoButton.addEventListener("click", closeModel);
}


function closeModel(){
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal){
        modal.classList.remove('open');

    }
    backdrop.classList.remove("open");
   
    setTimeout( function() {
        backdrop.style.display = "none";
    }, 200);

}


toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add("open")
    backdrop.style.display = 'block';
    setTimeout(function() {
        backdrop.classList.add("open");
    }, 10);
});


ctaButton.addEventListener('animationstart', function(event){
    console.log('Animation start', event);
})



ctaButton.addEventListener('animationend', function(event){
    console.log('Animation end', event);
})


ctaButton.addEventListener('animationiteration', function(event){
    console.log('Animation iteration', event);
})