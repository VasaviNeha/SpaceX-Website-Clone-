const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const number = document.querySelectorAll('.number');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    // document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;
    if(scrollPos > 92 && !scrollStarted){
        countUp();
        scrollStarted = true;
    }
    else if(scrollPos < 92 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    number.forEach((number) => {
        number.innerText = '0';


        const updateNumber = () => {
            // Get count target
            const target = +number.getAttribute('data-target');
            // Get current counter value
            const c = +number.innerText; 

            // Create an increment
            const increment = target / 100;

            // If conter is less than a target, add inc
            if(c < target){
                // Round up and set counter value
                number.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateNumber, 8);
            }
            else{
                number.innerText = target;
            }
        };

        updateNumber();
    });

}

function reset(){
    number.forEach((number) => (number.innerHTML = '0'));
}