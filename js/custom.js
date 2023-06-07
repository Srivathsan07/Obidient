// toggl-pwd
$(".pwd-eye").click(function(){
	$(this).toggleClass("open");
	if($(".pwd-eye").hasClass("open")){
		$(".login-input-pwd input").attr('type','password');
	}
	else{
		$(".login-input-pwd input").attr('type','text');
	}
})

    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
	$(".header-logo").click(function(){
		$(".header-logo").slideToggle("slow");
	  });

	
	$(".input-group-btn").after().click(function(){
		$(".navbar-form").toggleClass("slow");
	  });

	  
    // $('#admin').on('click', function(){
    //     $('.mega-menu').toggleClass('open');
    //     $('.right-page').toggleClass('shrink');
    // });

    // select box
    const select = document.querySelectorAll(".selectBtn");
const option = document.querySelectorAll(".option");
let index = 1;

select.forEach((a) => {
	a.addEventListener("click", (b) => {
		const next = b.target.nextElementSibling;
		next.classList.toggle("toggle");
		next.style.zIndex = index++;
	});
});
option.forEach((a) => {
	a.addEventListener("click", (b) => {
		b.target.parentElement.classList.remove("toggle");

		const parent = b.target.closest(".select").children[0];
		parent.setAttribute("data-type", b.target.getAttribute("data-type"));
		parent.innerText = b.target.innerText;
	});
});


// menu toggler
// if($("#sidebar #admin").hasClass("active")){
// 	$(".mega-menu").show()
// }
// else{
// 	$(".mega-menu").css("display","none")
// }
$(document).ready(function(){
	$('.menu-ico-g').on('click', function(){
		$('nav#sidebar').toggleClass('open');
		$('.menu-ico-g').toggleClass('open');
		$('.mega-menu').toggleClass('close');
		$('.right-page').toggleClass('shrink');
		$('.dashboard-logo').toggleClass('shrink-logo');
	});
	$(".menu-ico-mobile").click(function(){
		// $(".right-page").toggleClass("right-page-shrink")
		$("#sidebar").toggleClass("open");
		$(".mega-menu").toggleClass("open");
		$("body").toggleClass("overflow")
	})
	$(".sub-menu-items").show();
	$(".payment-details").click(function(){
		$(".sub-menu-items").slideToggle();

	})
})

