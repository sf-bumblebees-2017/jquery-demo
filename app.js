$(document).ready(function(){
  handleTaskFormSubmission()
  handleDeleteButtonClick()
})

function handleTaskFormSubmission (){
  $('#new-todo').on('submit', function(event){
    event.preventDefault();

    var inputValue = $(this).find('input').val();

    var taskHtml = "<li>" + inputValue + "<button class=\"delete\">X</button></li>"
    $('#tasks').append(taskHtml);
    $(this)[0].reset()
  })
}

function handleDeleteButtonClick(){
  $('.tasks').on('click', '.delete', function(){
    $(this).closest('li').remove()
  })
}














// $(document).ready(function () {
//   $('#new-todo').on('submit', function(event) {
//     event.preventDefault()
//     var inputValue = $(this).find('#desc').val()

//     var taskHtml = '<li>' + inputValue + '<button class="delete">X</button></li>'

//     $('#tasks').append(taskHtml)
//     $(this)[0].reset()
//   })


//   $('#tasks').on('click', '.delete', function (e) {
//     $(this).closest('li').remove()
//   })

// })

