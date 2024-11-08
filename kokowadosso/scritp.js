// Countdown Timer Script
const targetDate = new Date("2024-12-20T23:59:59").getTime();

setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = days.toString().padStart(2, "0");
            document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");


            if (distance < 0) {
                clearInterval();
                document.querySelector(".countdown-timer").innerHTML = `
                    <h2>Le grand événement a commencé !</h2>
                `;
            }
        }, 1000);



// const carouselInner = document.querySelector('.carousel-inner');
// const slides = carouselInner.children;

// let currentSlide = 0;

// function showSlide(index) {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (index + slides.length) % slides.length;
//     slides[currentSlide].classList.add('active');
// }

// setInterval(() => {
//     showSlide(currentSlide + 1);
// }, 5000);


document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);

    // Duplique les logos pour un défilement fluide
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
});


// const track = document.querySelector('.carousel-track');
// const items = Array.from(track.children);

// // Duplique les logos pour assurer un défilement continu
// items.forEach(item => {
//     const clone = item.cloneNode(true);
//     track.appendChild(clone);
// });



        // const track = document.querySelector('.carousel-track');
        // const items = Array.from(track.children);
        // const nextButton = document.querySelector('.carousel-btn.next');
        // const prevButton = document.querySelector('.carousel-btn.prev');
        // let currentIndex = 0;
        
        // function updateCarousel(index) {
        //   const itemWidth = items[0].getBoundingClientRect().width;
        //   track.style.transform = `translateX(-${index * itemWidth}px)`;
        // }
        
        // nextButton.addEventListener('click', () => {
        //   currentIndex = (currentIndex + 1) % items.length;
        //   updateCarousel(currentIndex);
        // });
        
        // prevButton.addEventListener('click', () => {
        //   currentIndex = (currentIndex - 1 + items.length) % items.length;
        //   updateCarousel(currentIndex);
        // });
        


// let currentIndex = 0;
// const images = document.querySelectorAll('.images img');
// const totalImages = images.length;

// const showImage = (index) => {
//     const newTransform = -index * 100; // Déplace les images selon l'index
//     document.querySelector('.images').style.transform = `translateX(${newTransform}%)`;
// };

// document.querySelector('.next').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % totalImages; // Passe à l'image suivante
//     showImage(currentIndex);
// });

// document.querySelector('.prev').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Passe à l'image précédente
//     showImage(currentIndex);
// });

// // Fonction pour démarrer l'animation automatique
// const autoScroll = () => {
//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % totalImages;
//         showImage(currentIndex);
//     }, 5000); // Défile toutes les 5 secondes
// };

// autoScroll(); // Lance le défilement automatique
