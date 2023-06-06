$(function(){
    console.log("let's get ready to party");
})

$("article img").addClass('image-center');

$("article p:last-child").remove();

$('#title').css("font-size", Math.random() * 100);

$('ol').append("<li>Nevermind, it was a cat.</li>");

$('aside').empty().append("<p>That list was silly, I apologize.</p>");


$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });

$("img").on('click', function(){
    $(this).remove();
})