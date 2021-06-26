function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    slides.forEach(el => {
        el.addEventListener('click', () => {
            clearActiveClasses()
            el.classList.add('active')
        })
    })
    
    function clearActiveClasses() {
        slides.forEach(el => {
            el.classList.remove('active')
        })
    }
}

slidesPlugin(4)