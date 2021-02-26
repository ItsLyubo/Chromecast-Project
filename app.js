const carouselSlide = document.querySelector('.article-container');
const carouselImages = document.querySelectorAll('.tv');

const prevBtn = document.querySelector('#left');
const nextBtn = document.querySelector('#right');



let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

nextBtn.addEventListener('click', ()=>{
    if (counter >= carouselImages.length -1) return;

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
})


prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    console.log(counter);
    carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitonend', ()=> {
    if (carouselImages[counter].id === 'original') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'nonoriginal') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
    }
})