// $("nav").onePageNav();

// var menu = $("nav ul");

// $("#burgerMenu").click(function() {
// 		menu.slideToggle();
// 	});

// $("nav ul").click(function() {
// 	if($(window).width() <= 768) {
// 		menu.slideUp();
// 	}
// });

// $("nav ul").click(function() {
// 	if($(window).width() <= 768) {
// 		menu.slideUp();
// 	}
// });

$(document).ready(function() {
	

	$("#cupOrCone").change(function() {
		var selectedOption = $("#cupOrCone").val();
		if (selectedOption === "2") {
			$("#cone").fadeIn();
			$("#cup").hide();
		} else if (selectedOption === "3") {
			$("#cup").fadeIn();
			$("#cone").hide();
		} else {
			$("#cup").hide();
			$("#cone").hide();
		}
	});

	$("#scoop").change(function() {
		var selectedScoops = $("#scoop").val();
		if (selectedScoops === "3") {
			$(".optional2").css("display", "inline-block");
			$(".optional3").hide();
			// $(".scoop3").hide();
			$("#vanilla3, #earlgreytea3, #fluffernuttercrunc3, #cookieandcream3, #ginger3, #strawberry3, #mintchip3, #caramel3, #pistachio3, #honeycomb3, #chocolate3").hide()
		} else if (selectedScoops === "2") {
			$(".optional2").hide();
			$(".optional3").hide();
			$("#vanilla2, #earlgreytea2, #fluffernuttercrunc2, #cookieandcream2, #ginger2, #strawberry2, #mintchip2, #caramel2, #pistachio2, #honeycomb2, #chocolate2").hide();
			$("#vanilla3, #earlgreytea3, #fluffernuttercrunc3, #cookieandcream3, #ginger3, #strawberry3, #mintchip3, #caramel3, #pistachio3, #honeycomb3, #chocolate3").hide();
		} else if (selectedScoops === "4") {
			$(".optional3").css("display", "inline-block");
			$(".optional2").css("display", "inline-block");
		} else {
			$(".optional2").hide();
			$(".optional3").hide();
			$("#vanilla2, #earlgreytea2, #fluffernuttercrunc2, #cookieandcream2, #ginger2, #strawberry2, #mintchip2, #caramel2, #pistachio2, #honeycomb2, #chocolate2").hide();
			$("#vanilla3, #earlgreytea3, #fluffernuttercrunc3, #cookieandcream3, #ginger3, #strawberry3, #mintchip3, #caramel3, #pistachio3, #honeycomb3, #chocolate3").hide();
		}

		computeTotal();
	});

	$("#flavorOptions").change(function() {
		var selectedFlavor = $("#flavorOptions").val();
		if (selectedFlavor === "2") {
			$("#chocolate").fadeIn();

			// $(".scoop1").not("#chocolate").hide();

			$("#vanilla, #earlgreytea, #fluffernuttercrunc, #cookieandcream, #ginger, #strawberry, #mintchip, #caramel, #pistachio, #honeycomb").hide();
		} else if (selectedFlavor === "3") {
			$("#vanilla").fadeIn();
			$("#chocolate, #earlgreytea, #fluffernuttercrunc, #cookieandcream, #ginger, #strawberry, #mintchip, #caramel, #pistachio, #honeycomb").hide();
		} else if (selectedFlavor === "4") {
			$("#honeycomb").fadeIn();
			$("#vanilla, #earlgreytea, #fluffernuttercrunc, #cookieandcream, #ginger, #strawberry, #mintchip, #caramel, #pistachio, #chocolate").hide();
		} else if (selectedFlavor === "5") {
			$("#strawberry").fadeIn();
			$("#vanilla, #earlgreytea, #fluffernuttercrunc, #cookieandcream, #ginger, #chocolate, #mintchip, #caramel, #pistachio, #honeycomb").hide();
		} else if (selectedFlavor === "6") {
			$("#earlgreytea").fadeIn();
			$("#vanilla, #chocolate, #fluffernuttercrunc, #cookieandcream, #ginger, #strawberry, #mintchip, #caramel, #pistachio, #honeycomb").hide(); 
		} else if (selectedFlavor === "7") {
			$("#mintchip").fadeIn();
			$("#vanilla, #earlgreytea, #fluffernuttercrunc, #cookieandcream, #ginger, #strawberry, #chocolate, #caramel, #pistachio, #honeycomb").hide();
		} else if (selectedFlavor === "8") {
			$("#caramel").fadeIn();
			$("#vanilla, #earlgreytea, #fluffernuttercrunc, #cookieandcream, #ginger, #strawberry, #mintchip, #chocolate, #pistachio, #honeycomb").hide();
		} else if (selectedFlavor === "9") {
			$("#ginger").fadeIn();
			$("#vanilla, #earlgreytea, #fluffernuttercrunc, #cookieandcream, #chocolate, #strawberry, #mintchip, #caramel, #pistachio, #honeycomb").hide();
		} else if (selectedFlavor === "10") {
			$("#pistachio").fadeIn();
			$("#vanilla, #earlgreytea, #fluffernuttercrunc, #cookieandcream, #ginger, #strawberry, #mintchip, #caramel, #chocolate, #honeycomb").hide();
		} else if (selectedFlavor === "11") {
			$("#cookieandcream").fadeIn(); 
			$("#vanilla, #earlgreytea, #fluffernuttercrunc, #chocolate, #ginger, #strawberry, #mintchip, #caramel, #pistachio, #honeycomb").hide();
		} else if (selectedFlavor === "12") {
			$("#fluffernuttercrunc").fadeIn();
			$("#vanilla, #earlgreytea, #chocolate, #cookieandcream, #ginger, #strawberry, #mintchip, #caramel, #pistachio, #honeycomb").hide();
		} else {
			$("#vanilla, #earlgreytea, #fluffernuttercrunc, #cookieandcream, #ginger, #strawberry, #mintchip, #caramel, #pistachio, #honeycomb, #chocolate").hide();
		}
	});

	$("#flavorOptions2").change(function() {
		var selectedFlavor = $("#flavorOptions2").val();
		if (selectedFlavor === "2") {
			$("#chocolate2").fadeIn();
			$("#vanilla2, #earlgreytea2, #fluffernuttercrunc2, #cookieandcream2, #ginger2, #strawberry2, #mintchip2, #caramel2, #pistachio2, #honeycomb2").hide();
		} else if (selectedFlavor === "3") {
			$("#vanilla2").fadeIn();
			$("#chocolate2, #earlgreytea2, #fluffernuttercrunc2, #cookieandcream2, #ginger2, #strawberry2, #mintchip2, #caramel2, #pistachio2, #honeycomb2").hide();
		} else if (selectedFlavor === "4") {
			$("#honeycomb2").fadeIn();
			$("#vanilla2, #earlgreytea2, #fluffernuttercrunc2, #cookieandcream2, #ginger2, #strawberry2, #mintchip2, #caramel2, #pistachio2, #chocolate2").hide();
		} else if (selectedFlavor === "5") {
			$("#strawberry2").fadeIn();
			$("#vanilla2, #earlgreytea2, #fluffernuttercrunc2, #cookieandcream2, #ginger2, #chocolate2, #mintchip2, #caramel2, #pistachio2, #honeycomb2").hide();
		} else if (selectedFlavor === "6") {
			$("#earlgreytea2").fadeIn();
			$("#vanilla2, #chocolate2, #fluffernuttercrunc2, #cookieandcream2, #ginger2, #strawberry2, #mintchip2, #caramel2, #pistachio2, #honeycomb2").hide();
		} else if (selectedFlavor === "7") {
			$("#mintchip2").fadeIn();
			$("#vanilla2, #earlgreytea2, #fluffernuttercrunc2, #cookieandcream2, #ginger2, #strawberry2, #chocolate2, #caramel2, #pistachio2, #honeycomb2").hide();
		} else if (selectedFlavor === "8") {
			$("#caramel2").fadeIn();
			$("#vanilla2, #earlgreytea2, #fluffernuttercrunc2, #cookieandcream2, #ginger2, #strawberry2, #mintchip2, #chocolate2, #pistachio2, #honeycomb2").hide();
		} else if (selectedFlavor === "9") {
			$("#ginger2").fadeIn();
			$("#vanilla2, #earlgreytea2, #fluffernuttercrunc2, #cookieandcream2, #chocolate2, #strawberry2, #mintchip2, #caramel2, #pistachio2, #honeycomb2").hide();
		} else if (selectedFlavor === "10") {
			$("#pistachio2").fadeIn();
			$("#vanilla2, #earlgreytea2, #fluffernuttercrunc2, #cookieandcream2, #ginger2, #strawberry2, #mintchip2, #caramel2, #chocolate2, #honeycomb2").hide();
		} else if (selectedFlavor === "11") {
			$("#cookieandcream2").fadeIn(); 
			$("#vanilla2, #earlgreytea2, #fluffernuttercrunc2, #chocolate2, #ginger2, #strawberry2, #mintchip2, #caramel2, #pistachio2, #honeycomb2").hide();
		} else if (selectedFlavor === "12") {
			$("#fluffernuttercrunc2").fadeIn();
			$("#vanilla2, #earlgreytea2, #chocolate2, #cookieandcream2, #ginger2, #strawberry2, #mintchip2, #caramel2, #pistachio2, #honeycomb2").hide();
		} else {
			$("#vanilla2, #earlgreytea2, #fluffernuttercrunc2, #cookieandcream2, #ginger2, #strawberry2, #mintchip2, #caramel2, #pistachio2, #honeycomb2, #chocolate2").hide();
		}
	});

	$("#flavorOptions3").change(function() {
		var selectedFlavor = $("#flavorOptions3").val();
		if (selectedFlavor === "2") {
			$("#chocolate3").fadeIn();
			$("#vanilla3, #earlgreytea3, #fluffernuttercrunc3, #cookieandcream3, #ginger3, #strawberry3, #mintchip3, #caramel3, #pistachio3, #honeycomb3").hide();
		} else if (selectedFlavor === "3") {
			$("#vanilla3").fadeIn();
			$("#chocolate3, #earlgreytea3, #fluffernuttercrunc3, #cookieandcream3, #ginger3, #strawberry3, #mintchip3, #caramel3, #pistachio3, #honeycomb3").hide();
		} else if (selectedFlavor === "4") {
			$("#honeycomb3").fadeIn();
			$("#vanilla3, #earlgreytea3, #fluffernuttercrunc3, #cookieandcream3, #ginger3, #strawberry3, #mintchip3, #caramel3, #pistachio3, #chocolate3").hide();
		} else if (selectedFlavor === "5") {
			$("#strawberry3").fadeIn();
			$("#vanilla3, #earlgreytea3, #fluffernuttercrunc3, #cookieandcream3, #ginger3, #chocolate3, #mintchip3, #caramel3, #pistachio3, #honeycomb3").hide();
		} else if (selectedFlavor === "6") {
			$("#earlgreytea3").fadeIn();
			$("#vanilla3, #chocolate3, #fluffernuttercrunc3, #cookieandcream3, #ginger3, #strawberry3, #mintchip3, #caramel3, #pistachio3, #honeycomb3").hide();
		} else if (selectedFlavor === "7") {
			$("#mintchip3").fadeIn();
			$("#vanilla3, #earlgreytea3, #fluffernuttercrunc3, #cookieandcream3, #ginger3, #strawberry3, #chocolate3, #caramel3, #pistachio3, #honeycomb3").hide();
		} else if (selectedFlavor === "8") {
			$("#caramel3").fadeIn();
			$("#vanilla3, #earlgreytea3, #fluffernuttercrunc3, #cookieandcream3, #ginger3, #strawberry3, #mintchip3, #chocolate3, #pistachio3, #honeycomb3").hide();
		} else if (selectedFlavor === "9") {
			$("#ginger3").fadeIn();
			$("#vanilla3, #earlgreytea3, #fluffernuttercrunc3, #cookieandcream3, #chocolate3, #strawberry3, #mintchip3, #caramel3, #pistachio3, #honeycomb3").hide();
		} else if (selectedFlavor === "10") {
			$("#pistachio3").fadeIn();
			$("#vanilla3, #earlgreytea3, #fluffernuttercrunc3, #cookieandcream3, #ginger3, #strawberry3, #mintchip3, #caramel3, #chocolate3, #honeycomb3").hide();
		} else if (selectedFlavor === "11") {
			$("#cookieandcream3").fadeIn(); 
			$("#vanilla3, #earlgreytea3, #fluffernuttercrunc3, #chocolate3, #ginger3, #strawberry3, #mintchip3, #caramel3, #pistachio3, #honeycomb3").hide();
		} else if (selectedFlavor === "12") {
			$("#fluffernuttercrunc3").fadeIn();
			$("#vanilla3, #earlgreytea3, #chocolate3, #cookieandcream3, #ginger3, #strawberry3, #mintchip3, #caramel3, #pistachio3, #honeycomb3").hide();
		} else {
			$("#vanilla3, #earlgreytea3, #fluffernuttercrunc3, #cookieandcream3, #ginger3, #strawberry3, #mintchip3, #caramel3, #pistachio3, #honeycomb3, #chocolate3").hide();
		}
	});



	$("#toppingOptions").change(function() {
		// icecreamCost = icecreamCost + 1;	
		// var selectedTopping = $("toppingOptions").val();
		// if (!(selectedTopping === "1" || selectedTopping === "6")) {
		// 	$("#costBox").html("$" + icecreamCost.toFixed(2));
		// } 
		computeTotal();
	
	});

	function computeTotal() {
		var scoopCost = $("#scoop option:selected").data("cost");
		var toppingCost = $("#toppingOptions option:selected").data("cost");
		var totalCost = parseFloat(scoopCost) + parseFloat(toppingCost);
		$("#costBox").html("$" + totalCost.toFixed(2));
	}


	$.stellar();

});

