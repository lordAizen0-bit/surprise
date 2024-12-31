let slideIndex = 0;
let slideInterval;

// Function to show slides
function showSlides() {
    const slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
}

// Function to start the slideshow
function startSlideshow() {
    slideInterval = setInterval(showSlides, 5000); // Change image every 5 seconds
}

// Function to move to the next slide
function nextSlide() {
    clearInterval(slideInterval); // Stop the automatic slideshow
    slideIndex++;
    const slides = document.getElementsByClassName("slides");
    if (slideIndex > slides.length) { slideIndex = 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    startSlideshow(); // Restart the automatic slideshow
}

// Function to move to the previous slide
function prevSlide() {
    clearInterval(slideInterval); // Stop the automatic slideshow
    slideIndex--;
    const slides = document.getElementsByClassName("slides");
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    startSlideshow(); // Restart the automatic slideshow
}

// Start the slideshow when the page loads
window.onload = function() {
    showSlides(); // Show the first slide
    startSlideshow(); // Start the automatic slideshow
};

function submitQuiz() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked')
    };
    let score = 0;
    if (answers.q1 && answers.q1.value === "D") score++;
    if (answers.q2 && answers.q2.value === "D") score++;
    if (answers.q3 && answers.q3.value === "D") score++;
    if (answers.q4 && answers.q4.value === "A") score++;
    document.getElementById("quiz-result").innerText = `You scored ${score} out of 4!`;
}

function submitHerQuiz() {
    const memory = document.getElementById("her-memory").value;
    const favoriteThing = document.getElementById("her-favorite-thing").value;
    const travelDestination = document.getElementById("her-travel-destination").value;
    document.getElementById("her-quiz-result").innerText = `Your memory: "${memory}" has been noted! Your favorite thing: "${favoriteThing}" and travel destination: "${travelDestination}" have also been recorded! Thank you for sharing!`;
}