gsap.set('.cursor', {xPercent: -50, yPercent: -50});
gsap.set('.cursor-blur', {xPercent: -50, yPercent: -50});

var crsr = document.querySelector(".cursor")
var crsrblur = document.querySelector(".cursor-blur")

window.addEventListener('mousemove', e => {
    gsap.to(crsr, 0.5, {
        x:e.clientX, y:e.clientY
    });
    gsap.to(crsrblur, 1.5, {
        x:e.clientX, y:e.clientY
    });
});


// var crsr2 = document.querySelector(".cursor")

// var h4All = document.querySelectorAll("#nav h4")

// h4All.forEach(function(elem){
//     elem.addEventListener("mouseenter", function(){
//         crsr.style.scale = 3
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//     })
// })



gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub: 1.5
    }
})

gsap.to("#main", {
    backgroundColor : "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top 0%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us-in, #about-us img", {

    y: 90,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end: "top 55%",
        scrub: 2
    }
})


gsap.from(".card", {

    scale:0.9,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end: "top 55%",
        scrub: 1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 5
    }
})

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 5
    }
})

gsap.from("#page4 h1", {

    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end: "top 70%",
        scrub: 2
    }
})