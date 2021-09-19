const date1 = dayjs();
var weeks = date1.diff('2021-06-18', 'week');
var days = date1.diff('2021-06-18', 'days') % 7
if (days>1){
  var word_day = ' days'
} else {
  var word_day = ' day'
}

var text_out = 'Willa is ' + weeks + ' weeks, ' + days + word_day + ' old.';

var num_pictures = 17
var num = Math.floor(Math.random() * num_pictures + 1); 
var randomimage = "Willa" + num + ".jpg";

//if ("serviceWorker" in navigator) {
//  window.addEventListener("load", function() {
//    navigator.serviceWorker
//      .register("/serviceWorker.js")
//      .then(res => console.log("service worker registered"))
//      .catch(err => console.log("service worker not registered", err))
//  })
// }
