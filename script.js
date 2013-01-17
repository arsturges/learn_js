$(document).ready(function() {
  $('h1 + p').addClass('large_blue');

  $('#toggleButton').click(function() {
    $('#disclaimer').toggle();
    if ($('#disclaimer').is(':visible')) {
      $(this).val('Hide');
    } else {
      $(this).val('Show'); 
    }
  });
});

