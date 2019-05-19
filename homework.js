var clicked= false

$(document).ready(function(argument) {
	$("#hamburger").click(function(argument) {
    if (clicked==false) {
      $("#bs-example-navbar-collapse-1").removeClass("collapse");
    } else {
      $("#bs-example-navbar-collapse-1").addClass("collapse");
    }
    clicked= !clicked
	})
	// body...
})

