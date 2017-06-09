var count = 0;
$('#cat').click(function() {
  count++;
  console.log(count);
  $('#counter').html("Clicks: " + count);
  return false;
});
