let value = $('h2').text();

$('.button').on('click', () => {
   value++;
   $('h2').text(value);
})

$('.dbutton').on('click', () => {
    value--;
    $('h2').text(value);
})