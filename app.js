var counter1 = 0;
$('#cat1').click(function() {
  counter1++;
  console.log(counter1);
  $('#counter1').html("Clicks: " + counter1);
  return false;
});

var counter2 = 0;
$('#cat2').click(function() {
  counter2++;
  console.log(counter2);
  $('#counter2').html("Clicks: " + counter2);
  return false;
});
