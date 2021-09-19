// var bucket = [];

// for (var i=1;i<=10;i++) {
//    bucket.push(i);
//}

//function getRandomFromBucket() {
//   var randomIndex = Math.floor(Math.random()*bucket.length);
//   return bucket.splice(randomIndex, 1)[0];
//}

// will pick a random number between 0 and 10, and can be called 10 times
//var randomImage1 = "Willa" + getRandomFromBucket() + ".jpg";
//var randomImage2 = "Willa" + getRandomFromBucket() + ".jpg";
//var randomImage3 = "Willa" + getRandomFromBucket() + ".jpg";
//var randomImage4 = "Willa" + getRandomFromBucket() + ".jpg";
//var randomImage5 = "Willa" + getRandomFromBucket() + ".jpg";




// slide show
//var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}

// Thumbnail image controls
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}

// function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("dot");
//  if (n > slides.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";
//  }
//  for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex-1].style.display = "block";
 // dots[slideIndex-1].className += " active";
//}