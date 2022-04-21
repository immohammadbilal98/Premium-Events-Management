//Change Navbar Scrolling 
// window.addEventListener('scroll', function () {
//     let nav_tigger = document.querySelector('.nav-trigger');
//     let windowPosition = window.scrollY > 0;

//     nav_tigger.classList.toggle('nav-menu-hidden', windowPosition);
// })

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

const circle_logo = document.querySelector(".circle-logo")

const logo = document.querySelector(".logo");
const navbar = document.querySelector(".nav-list");
const navigation = document.querySelector("#Navigation");

const tl = new TimelineMax();
tl.fromTo(slider, 4.5, { y: "0%" }, { y: "-100%", ease: Power3.easeInOut }, "+=4.2")
  // .fromTo(logo, 1, { opacity: 0, x: 300}, { opacity: 1, x: 0 }, "-=0.5")
  // .fromTo(navbar,2, {opacity:0, x:-100} , {opacity:1, x:0},"-=0.5" )
//   .fromTo(navigation,1.5,{opacity:0} , {opacity:1},"-=0.5" )

// tl.fromTo(circle_logo, 5, { rotation: "360", }, { rotation: "0", ease: Power3.easeInOut }, "+=.1")

// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".L-R", {
// 	scrollTrigger: {
// 	  trigger: ".L-R",
//     start: "center bottom",
// 	}, 
//   ease: Expo.easeInOut,
// 	x: -50,
// 	opacity: 0,
// 	duration:1.5,
//   });

// gsap.from(".R-L", {
//     scrollTrigger: {
//       trigger: ".R-L",
//       start: "center bottom",
//     }, 
//     ease: Expo.easeInOut,
//     x: 50,
//     opacity: 0,
//     duration:1.5,
// });  


// gsap.from(".R-L", {
//     scrollTrigger: {
//       trigger: ".R-L",
//       start: "center top"
//     }, 
//     x: 50,
//     opacity: 0,
//     duration:1.5,
// });  





// gsap.from(".showing", {
// 	scrollTrigger: {
// 	  trigger: ".showing",
// 	  start: "center top"
// 	}, 
// 	x: -1,
// 	opacity: 0,
// 	duration:2,
//   });

  // gsap.from(".showing-logo", {
	// scrollTrigger: {
	//   trigger: ".showing-logo",
	//   start: "center bottom"
	// }, 
	// x: -1,
	// opacity: 0,
	// duration:2,
	// delay:6
  // });  
  

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
//   $('.js-anchor-link').click(function(e){
//     e.preventDefault();
//     var target = $($(this).attr('href'));
//     if(target.length){
//       var scrollTo = target.offset().top;
//       $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
//     }
//   });  
// });


var navTrigger = document.getElementsByClassName('nav-trigger')[0],
    body = document.getElementsByTagName('body')[0];

navTrigger.addEventListener('click', toggleNavigation);

var closeMenu_overlay = document.querySelector(".overlay")
closeMenu_overlay.addEventListener('click', toggleNavigation);

var closeMenu_Nav = document.querySelector(".nav-offcanvas")
closeMenu_Nav.addEventListener('click', toggleNavigation_nav);

function toggleNavigation(event) {
  event.preventDefault();
  body.classList.toggle('nav-open');
}

function toggleNavigation_nav(event) {
  event.preventDefault();
  body.classList.toggle('nav-open');
}


// let About_Nav = function (event) {
//   var elmnt = document.getElementById("About");
//   elmnt.scrollIntoView();
// }

let About_Nav = function () {
  if ( window.location.pathname == '/' ){
    var elmnt = document.getElementById("About");
    elmnt.scrollIntoView();
    console.log(window.location.pathname);
} else {
    // Other page
    location.href = '/#About'
    console.log(window.location.pathname);
}
}

let Concept_Nav = function (event) {
  if ( window.location.pathname == '/' ){
  var elmnt = document.getElementById("Concept");
  elmnt.scrollIntoView();
  }
  else {
    // Other page
    location.href = '/#Concept'
    console.log(window.location.pathname);
}
}

let Contact_Nav = function (event) {
  if ( window.location.pathname == '/' ){
  var elmnt = document.getElementById("Contact");
  elmnt.scrollIntoView();
}
else {
  // Other page
  location.href = '/#Contact'
  console.log(window.location.pathname);
}
}

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,

// });



// gsap.from(".L-R", {
// 	scrollTrigger: {
// 	  trigger: ".L-R",
//     start: "center bottom",
//     // scroller: ".smooth-scroll",
// 	}, 
//   ease: Expo.easeInOut,
// 	x: -50,
// 	opacity: 0,
// 	duration:1.5,
//   });

// gsap.from(".R-L", {
//     scrollTrigger: {
//       trigger: ".R-L",
//       start: "center bottom",
//       // scroller: ".smooth-scroll",
//     }, 
//     ease: Expo.easeInOut,
//     x: 50,
//     opacity: 0,
//     duration:1.5,
// });  


// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });

window.sr= ScrollReveal();

sr.reveal('.heading_animate', { 
  duration:1500,
  distance:'100px',
  origin:'top',
  opacity: 0,
});

sr.reveal('.L-R', { 
  delay: 500,
  duration:1500,
  distance:'100px',
  origin:'left',
  opacity: 0,
});

sr.reveal('.R-L', {
  delay: 500, 
  duration:1500,
  distance:'100px',
  origin:'right',
  opacity: 0,
});



const liquifyTrigger = document.querySelector('.liquify');
const controller = new ScrollMagic.Controller();
 
const sceneAuthorLiquid = new ScrollMagic.Scene({
    triggerElement: liquifyTrigger,
    triggerHook: 'onEnter',
  })
  .setTween('#liquid', 6, {
    attr: {
      scale: '0'
    },
    ease: Power4.easeOut,
    delay: 5,
  })
  .reverse(false)
  .addTo(controller);


  var animation = bodymovin.loadAnimation({
    container: document.querySelector('#Slider-lottie'), // Required
    path: '/ae/data.json', // Required
    renderer: 'svg', // Required
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
  })





const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(
    Math.pow(diffX, 2) + Math.pow(diffY, 2)
  );
  const maxSqueeze = 0.15;
  const accelerator = 500;
  return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);
  
  pos.x += diffX * speed;
  pos.y += diffY * speed;
  
  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);
  
  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
  const rotate = 'rotate(' + angle +'deg)';
  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);



const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
  curosrModifier.addEventListener('mouseenter', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.add(className);
  });
  
  curosrModifier.addEventListener('mouseleave', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.remove(className);
  });
});