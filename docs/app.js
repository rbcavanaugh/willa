const date1 = dayjs();
var weeks = date1.diff('2021-06-18', 'week');
var days = date1.diff('2021-06-18', 'days') % 7
if (days>1){
  var word_day = ' days'
} else {
  var word_day = ' day'
}

var text_out = 'Willa is now ' + weeks + ' weeks, ' + days + word_day + ' old.';


