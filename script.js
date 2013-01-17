$(document).ready(function() {
  $('#no-script').remove();
  $('h1 + p').addClass('large_blue');
  $('<input type="button" id="toggleButton" value="toggle" />')
    .insertAfter('#disclaimer');
  $('#toggleButton').click(function() {
    $('#disclaimer').toggle();
    if ($('#disclaimer').is(':visible')) {
      $(this).val('Hide');
    } else {
      $(this).val('Show'); 
    }
  });
  $('p').html('<strong>Goodbye</strong>, cruel paragraphs!');
  $('h2').text('<strong>All your h2 are belong to us!</strong>');
});

