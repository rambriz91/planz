var today = dayjs();
var time = parseInt(dayjs().format('H'));
var timeBlock = $('.time-block');

$(document).ready(function() {
//Sets current date to the header element in January, 1, 2023 format
  $('#currentDay').text(today.format('[Today is] MMMM D, YYYY'));
//Event listener that listens for clicks on the save button. Records the ID as as a key in local storage and adds the corresponding text content.
  $('.saveBtn').on('click', function() {
    var hour = $(this).parent().attr('id');
    var blockText = $(this).siblings('textarea').val();
    localStorage.setItem(hour, blockText);
  });
// Grabs schedule from each hour key in local storage and displays it dynamically.
//Compares the current hour with i and applies past, present, and future classes.
  function loadPlanz() {
    let i = 9;
    timeBlock.each(function() {
      $('#hour-'+[i]+ ' .description').val(localStorage.getItem('hour-'+[i]));
      console.log(this);
      console.log(time);
      console.log(i);
        if (i === time) {
        $(this).addClass('present')
        }
        else if (i < time) {
        $(this).addClass('past');
        }
        else {
        $(this).addClass('future')
        }
        i++;
    });
  }

  loadPlanz();
  });





