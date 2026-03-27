//leaflet
//map libre
//add custom marker
//add custom popups

if (document.getElementById('map')) {
    var map = L.map('map').setView([43.6531884,-79.3940591], 17);

    L.tileLayer("https://api.mapunik.com/styles/{style_id}/tiles/{z}/{x}/{y}?access_token=YOUR_TOKEN", {
      maxZoom: 19,
      attribution: "© Mapunik",
    }).addTo(map);
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}