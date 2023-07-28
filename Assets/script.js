var today = dayjs();
var time = parseInt(dayjs().format('H'));
var timeBlock = $('.time-block');

$(document).ready(function(){
//Sets current date to the header element in January, 1, 2023 format
  $('#currentDay').text(today.format('[Today is] MMMM D, YYYY'));
//Event listener that listens for clicks on the save button. Records the ID as as a key in local storage and adds the corresponding text content.
  $('.saveBtn').on('click', function() {
    var hour = $(this).parent().attr('id');
    var blockText = $(this).siblings('textarea').val();
    localStorage.setItem(hour, blockText);
  });
// Grabs schedule from each hour key in local storage and displays it dynamically.
  function loadPlanz() {
    let i = 9;
    timeBlock.each(function() {
      $('#hour-'+[i]+ ' .description').val(localStorage.getItem('hour-'+[i]));
        console.log(i);
        console.log(time);
        if (i === time) {
        timeBlock.addClass('present')
        }
        else if (i < time) {
        timeBlock.addClass('past');
        }
        else {
        timeBlock.addClass('future')
        }
        i++;
    });
  }

  loadPlanz();
    
  
  
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
  });





