$("#box1").css({"background-color":"green"});

$("#para1").css({"font-size":"28px", "font-weight":"bold"});

$("#box2").addClass(".spin");

$('#button1').click( function() { alert('I been clicked bitch!'); });

$('#box3').hover(function(){
    $(this).css("background-color", "green");
    }, function(){
    $(this).css("background-color", "red");
});

  $("#box4").animate({left:"400px"}, "slow")
           .animate({top:"150px"}, "slow")
           .animate({left:0},"slow")
           .animate({top:0}, "slow");
           

$('#input1').keyup(function() {
    var dInput = this.value;
    console.log(dInput);
  
});



