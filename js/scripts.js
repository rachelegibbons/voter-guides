$(function(){
  $("form#age").submit(function(event){
    event.preventDefault();

    var age = parseInt($("#ageInput").val());

    if (age >= 18) {
      $("form#age").hide();
      $("#over18").slideToggle();
    } else {
      $("form#age").hide();
      $("#under18").slideToggle();
    }

    $(".age").text(age);

  });

  $("#overBack").click(function(event){
    event.preventDefault();
    $("#over18").hide();
    $("form#age").slideToggle();
  });

  $("#underBack").click(function(event){
    event.preventDefault();
    $("#under18").hide();
    $("form#age").slideToggle();
  });
});
