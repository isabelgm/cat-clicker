var counter = 0;

$('#cat-1').click(function() {
  counter = 0;
  $('#counter').html("Clicks: " + counter);
  $('#cat-name').html("Kitty Eyes");
  $('#cat-img').attr("src", "images/cat1.jpg");
});

$('#cat-2').click(function() {
  counter = 0;
  $('#counter').html("Clicks: " + counter);
  $('#cat-name').html("Blue-Eyed Cat");
  $('#cat-img').attr("src", "images/cat2.jpg");
});

$('#cat-3').click(function() {
  counter = 0;
  $('#counter').html("Clicks: " + counter);
  $('#cat-name').html("Snuggle Buddies");
  $('#cat-img').attr("src", "images/cat3.jpg");
});

$('#cat-4').click(function() {
  counter = 0;
  $('#counter').html("Clicks: " + counter);
  $('#cat-name').html("Siesta Time");
  $('#cat-img').attr("src", "images/cat4.jpg");
});

$('#cat-5').click(function() {
  counter = 0;
  $('#counter').html("Clicks: " + counter);
  $('#cat-name').html("Park Friends");
  $('#cat-img').attr("src", "images/cat5.jpg");
});

$('#cat-img').click(function(catCopy){
  counter++;
  console.log(counter);
  $('#counter').html("Clicks: " + counter);
});
