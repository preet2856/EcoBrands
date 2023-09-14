// This code work for animated cursor
var crsr = document.querySelector(".cursor");

document.addEventListener("mousemove", function (dets) {
	crsr.style.left = dets.x + 30 + "px";
	crsr.style.top = dets.y + "px";
});

// This code work for part-2
var tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".part-2",
		start: "50% 50%",
		end: "100% 100%",
		scrub: true,
	}
});

tl.to(".banner-1", {
	left: "-25%",
}, 'a')
	.to(".banner-2", {
		right: "-20%",
	}, 'a')

var anim = gsap.timeline();
anim.from(".center-part-1", {
	y: -200,
	opacity: 0,
	duration: 3.5,
	scrub: true,
})

// This code work for services section
document.querySelector(".ser-1").addEventListener("mousemove", function () {
	document.querySelector(".h-div-1").style.top = "0%";
	document.querySelector(".ser-1").style.cursor = "pointer";
})

document.querySelector(".ser-1").addEventListener("mouseleave", function () {
	document.querySelector(".h-div-1").style.top = "100%";
})


document.querySelector(".ser-2").addEventListener("mousemove", function () {
	document.querySelector(".h-div-2").style.top = "0%";
	document.querySelector(".ser-2").style.cursor = "pointer";
})

document.querySelector(".ser-2").addEventListener("mouseleave", function () {
	document.querySelector(".h-div-2").style.top = "100%";
})


document.querySelector(".ser-3").addEventListener("mousemove", function () {
	document.querySelector(".h-div-3").style.top = "0%";
	document.querySelector(".ser-3").style.cursor = "pointer";
})

document.querySelector(".ser-3").addEventListener("mouseleave", function () {
	document.querySelector(".h-div-3").style.top = "100%";
})


document.querySelector(".ser-4").addEventListener("mousemove", function () {
	document.querySelector(".h-div-4").style.top = "0%";
	document.querySelector(".ser-4").style.cursor = "pointer";
})

document.querySelector(".ser-4").addEventListener("mouseleave", function () {
	document.querySelector(".h-div-4").style.top = "100%";
})

// This code work for services-section animated cursor
var boxes = document.querySelectorAll(".services-item")
boxes.forEach(function (elem) {
	elem.addEventListener("mouseenter", function () {
		var att = elem.getAttribute("data-image")
		crsr.style.width = "270px"
		crsr.style.height = "170px"
		crsr.style.borderRadius = "0"
		crsr.style.backgroundImage = `url(${att})`
	})
	elem.addEventListener("mouseleave", function () {
		elem.style.backgroundColor = "transparent"
		crsr.style.width = "20px"
		crsr.style.height = "20px"
		crsr.style.borderRadius = "50%"
		crsr.style.backgroundImage = `none`
	})
})