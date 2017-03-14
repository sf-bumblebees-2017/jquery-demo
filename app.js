
$(document).ready(function () {
  $('#new-todo').on('submit', function(event) {
    event.preventDefault()
    var inputValue = $(this).find('#desc').val()

    var taskHtml = '<li>' + inputValue + '<button class="delete">X</button></li>'

    $('#tasks').append(taskHtml)
    $(this)[0].reset()
  })


  $('#tasks').on('click', '.delete', function (e) {
    $(this).closest('li').remove()
  })

})




















// $(document).ready(function() {
//   $('form').submit(function(event){
//     event.preventDefault();
//     var task = $('input#desc').val();
//     $('#tasks').append('<li>' + task + '<button class="delete">X</button></li>');
//     $('form')[0].reset();
//   });

//   $('#tasks').on('click', '.delete', function() {
//     $(this).closest('li').remove();
//   });
// })