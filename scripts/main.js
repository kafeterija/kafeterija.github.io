window.onload = function() {
    var slideIndex = 0;
    var timer;
    showSlide(slideIndex);

    function showSlide(n) {
        var slides = document.getElementsByClassName('slide');
        if (n == undefined) {
            n = slideIndex + 1;
        }
        
        slideIndex = (n + slides.length) % slides.length

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = (slideIndex == i) ? "block": "none";
        }

        clearTimeout(timer);
        timer = setTimeout(showSlide, 4000);
       
    }

    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    next.onclick = function() {
        showSlide(slideIndex + 1);
    };

    previous.onclick = function() {
        showSlide(slideIndex - 1);
    };


}
