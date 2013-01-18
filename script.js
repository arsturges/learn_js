$(document).ready(function() {
  $('#no-script').remove();
  $('h1 + p').addClass('large_blue');
  $('<input type="button" id="toggleButton" value="toggle" />')
    .insertAfter('#disclaimer');
  $('#toggleButton').click(function() {
    $('#disclaimer').slideToggle('slow');
    if ($('#disclaimer').is(':visible')) {
      $(this).val('Hide');
    } else {
      $(this).val('Show'); 
    }
  });
  $('h2').text('<strong>All your h2 are belong to us!</strong>');
  $('.spoiler').hide();
  $("<span class='revealer'>Tell me!</span>").insertAfter('.gossip');
  $('.revealer').click(function () {
    $(this).hide();
    $('.spoiler').fadeIn();
  });
});
