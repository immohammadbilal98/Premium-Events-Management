//Change Navbar Scrolling 
window.addEventListener('scroll', function () {
    let nav_tigger = document.querySelector('.nav-trigger');
    let windowPosition = window.scrollY > 0;

    nav_tigger.classList.toggle('nav-menu-hidden', windowPosition);
})

let ChangeIcon = function(icon){
    icon.classList.toggle("change")
}



// let mb= document.querySelector(".modal-backdrop");
// let hamburger_close = document.querySelector(".container-icon");

// if(mb){
// mb.addEventListener('click', closeModal);
// }

// const closeModal = function () {
//   mb.classList.remove('fade show');
//   icon.classList.remove('change');
//   console.log("working...")
// };


// let ExitIcon = function(icon_exit){
//   icon_exit.classList.toggle("change-exit")
// }

//BARBA JS

// barba.init({
//     sync: true,
//     transitions: [
//       {
//         async leave(data) {
//           const done = this.async();
  
//           pageTransition();
//           await delay(1500);
//           done();
//         },
  
//         async enter(data) {
//           contentAnimation();
//         },
  
//         async once(data) {
//           contentAnimation();
//         },
//       },
//     ],
//   });
    
// function delay(n) {
//   n = n || 2000;
//   return new Promise((done) => {
//     setTimeout(() => {
//       done();
//     }, n);
//   });
// }
  

  
// //GSAP ANIMATION
// function pageTransition() {
//     let tl = gsap.timeline();
  
//     tl.to("ul.transition li", {
//       duration: 0.5,
//       scaleY: 1,
//       transformOrigin: "bottom left",
//       stagger: 0.2,
//     });
  
//     tl.to("ul.transition li", {
//       duration: 0.5,
//       scaleY: 0,
//       transformOrigin: "bottom left",
//       stagger: 0.1,
//       delay: 0.1,
//     });
//   }

//   function contentAnimation() {
//     let tl = gsap.timeline();
//     tl.from(".left-main", { duration: 1.5, translateY: 450, opacity: 0 });
//   }

const slider = document.querySelector(".slider");
const logo = document.querySelector(".logo");
const navbar = document.querySelector(".nav-list");
const navigation = document.querySelector("#Navigation");

const tl = new TimelineMax();
tl.fromTo(slider, 4.5, { x: "0%" }, { x: "-100%", ease: Power3.easeInOut }, "+=1.2")
  // .fromTo(logo, 1, { opacity: 0, x: 300}, { opacity: 1, x: 0 }, "-=0.5")
  // .fromTo(navbar,2, {opacity:0, x:-100} , {opacity:1, x:0},"-=0.5" )
//   .fromTo(navigation,1.5,{opacity:0} , {opacity:1},"-=0.5" )



// Scroll Smooth
// window.smoothScroll = function(target) {

// 	var scrollContainer = target,
// 	header = document.querySelectorAll('.navbar'),
// 	space = header[0].clientHeight;

// 	do {
// 		scrollContainer = scrollContainer.parentNode;
// 		if (!scrollContainer) return;
// 		scrollContainer.scrollTop += 1;
// 	} while (scrollContainer.scrollTop == 0);

// 	var targetY = -space;

// 	do {
// 		if (target == scrollContainer) break;
// 		targetY += target.offsetTop;
// 	} while (target = target.offsetParent);

// 	scroll = function(c, a, b, i) {

// 		i++; if (i > 30) return;
// 		c.scrollTop = a + (b - a) / 30 * i;
// 		setTimeout(function() {scroll(c, a, b, i); }, 5);
// 	}

// 	scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
// }

gsap.registerPlugin(ScrollTrigger);

gsap.from(".L-R", {
	scrollTrigger: {
	  trigger: ".L-R"
	}, 
	x: -50,
	opacity: 0,
	duration:1.5,
  });

gsap.from(".R-L", {
    scrollTrigger: {
      trigger: ".R-L",
    }, 
    x: 50,
    opacity: 0,
    duration:1.5,
});  


// gsap.from(".R-L", {
//     scrollTrigger: {
//       trigger: ".R-L",
//       start: "center top"
//     }, 
//     x: 50,
//     opacity: 0,
//     duration:1.5,
// });  


// gsap.from(".nav-one", {
//   scrollTrigger: {
//     trigger: ".nav-one"
//   }, 
//   x: -50,
//   opacity: 0,
//   duration:5,
//   delay:5
//   });

// gsap.from(".nav-one", {
//   scrollTrigger: {
//     trigger: ".nav-one"
//   }, 
//   x: -50,
//   opacity: 0,
//   duration:5,
//   delay:5
//   });

// gsap.from(".nav-one", {
//   scrollTrigger: {
//     trigger: ".nav-one"
//   }, 
//   x: -50,
//   opacity: 0,
//   duration:5,
//   delay:5
//   });




// gsap.from(".showing", {
// 	scrollTrigger: {
// 	  trigger: ".showing",
// 	  start: "center top"
// 	}, 
// 	x: -1,
// 	opacity: 0,
// 	duration:2,
//   });

  gsap.from(".showing-logo", {
	scrollTrigger: {
	  trigger: ".showing-logo",
	  start: "center bottom"
	}, 
	x: -1,
	opacity: 0,
	duration:2,
	delay:6
  });  
  

// SmoothVerticalScrolling(myelement, 275, "center");

// function SmoothVerticalScrolling(e, time, where) {
//     var eTop = e.getBoundingClientRect().top;
//     var eAmt = eTop / 100;
//     var curTime = 0;
//     while (curTime <= time) {
//         window.setTimeout(SVS_B, curTime, eAmt, where);
//         curTime += time / 100;
//     }
// }

// function SVS_B(eAmt, where) {
//     if(where == "center" || where == "")
//         window.scrollBy(0, eAmt / 2);
//     if (where == "top")
//         window.scrollBy(0, eAmt);
// }


// ======================================
// $(document).ready(function() {
//   var navHeight = Math.round($('.uk-navbar-container').height());
  
//   $('.oc-scroll').on('click', function() {
//     var $el = $(this).attr('href');
    
//     $('#offcanvas-nav-primary').on('hidden', function() {
//       UIkit.scroll(this, {offset: navHeight}).scrollTo($el);
//     });
//   });
  
// });


var navTrigger = document.getElementsByClassName('nav-trigger')[0],
    body = document.getElementsByTagName('body')[0];

navTrigger.addEventListener('click', toggleNavigation);

function toggleNavigation(event) {
  event.preventDefault();
  body.classList.toggle('nav-open');
}




// $(document).ready(function() {
// 	var navHeight = Math.round($('.uk-navbar-container').height());
	
// 	$('.oc-scroll').on('click', function() {
// 	  var $el = $(this).attr('href');
	  
// 	  $('#offcanvas-nav-primary').on('hidden', function() {
// 		UIkit.scroll(this, {offset: navHeight}).scrollTo($el);
// 	  });
// 	});
	
//   });
// const overlay = document.querySelector('.overlay');
// const nav_container = document.querySelector('.nav-container');

// overlay.addEventListener('click', function(event){
// 	event.preventDefault();
// 	nav_container.classList.add('navcontainer-hidden');
// 	overlay.classList.add('overlay-hidden');
// });

// $(document).ready(function() {
// 	$('.offcanvas-toggle').on('click', function() {
// 	  $('body').toggleClass('offcanvas-expanded');
// 	});
//   });
//   $(document).click(function(e) {
// 	if ((e.target != $('.offcanvas')[0]) && (e.target != $('.offcanvas-toggle')[0]) && ($('body').hasClass('offcanvas-expanded'))) {
// 	  var li_tags = $($('.offcanvas')[0]).find('li');
// 	  var a_tags = $($('.offcanvas')[0]).find('a');
// 	  for (var i = 0; i < li_tags.length; i++) {
// 		if (e.target == li_tags[i] || e.target == a_tags[i]) {
// 		  return;
// 		}
// 	  }
// 	  $('body').toggleClass('offcanvas-expanded');
// 	}
//   })

// $(document).foundation();

// $('.nav-container a').on('click', function() {
//   $('.nav-container').foundation('close');
// });

