(function () {
  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
  .to(".slide-1 .callout:nth-of-type(1)", 4, {opacity: 1,left:'40%'})
  .to(".slide-1 .callout:nth-of-type(2)", 4, {opacity: 1,left:'46%'})
  .to(".slide-1 .callout:nth-of-type(3)", 4, {opacity: 1,left:'46%'})
  .to(".slide-1 .callout:nth-of-type(4)", 4, {opacity: 1,left:'46%'})
  .to(".slide-1 .callout:nth-of-type(5)", 4, {opacity: 1,left:'46%'})

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1, {x: "-5%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-2 img:nth-of-type(2)", 3, {height:'100%'})
  .to(".slide-2 img:nth-of-type(3)", 3, {opacity:1})
  .to(".slide-2 img:nth-of-type(4)", 3, {opacity:1})
  .to(".slide-2 .callout", 3, {opacity: 1, left:'4%'})
  .to(".slide-2 img:nth-of-type(3)", 4, {opacity:0, bottom:'21rem', top: 'auto'}, '=3')
  .to(".slide-2 img:nth-of-type(5)", 3, {opacity:1})
  .to(".slide-2 img:nth-of-type(5)", 6, {opacity:1, height:'100%', top:0})

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-10%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-3 img:nth-of-type(2)", 3, {opacity:1, top:0, 'z-index': 1})
  .to(".slide-3 .callout:nth-of-type(1)", 6, {opacity:1,left:'6%'})
  .to(".slide-3 img:nth-of-type(3)", 4, {opacity:1}, '-=4')
  .to(".slide-3 img:nth-of-type(4)", 4, {opacity:1, top:0}, '-=2')
  .to(".slide-3 .callout:nth-of-type(2)", 6, {opacity:1,left:'4%'})
  .to(".slide-3 img:nth-of-type(5)", 4, {width:'24%'})
  .to(".slide-3 img:nth-of-type(6)", 4, {width:'24%'})
  .to(".slide-3 img:nth-of-type(7)", 4, {width:'12%'})
  .to(".slide-3 img:nth-of-type(8)", 4, {width:'16%'})
  .to(".slide-3 .callout:nth-of-type(3)", 6, {opacity:1,left:'2%'})
  .to(".slide-3 img:nth-of-type(3), .slide-3 img:nth-of-type(5), .slide-3 img:nth-of-type(6), .slide-3 img:nth-of-type(7), .slide-3 img:nth-of-type(8)", 6, {opacity: 0, display: 'none'})
  .to(".slide-3 img:nth-of-type(9)", 6, {opacity:1}, '-=2')
  .to(".slide-3 img:nth-of-type(10)", 10, {opacity:1,top:'18%'}, '-=4')
  .to(".slide-3 img:nth-of-type(11)", 4, {opacity:1, top:0}, '-=6')

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-15%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-4 img:nth-of-type(2)", 4, {opacity: 1, top: '10%'})
  .to(".slide-4 img:nth-of-type(3)", 4, {opacity: 1, bottom: '15%'}, '-=4')
  .to(".slide-4 .callout:nth-of-type(1)", 1, {opacity: 1,left:'6%'}, '-=0.5')
  .to(".slide-4 img:nth-of-type(4)", 4, {bottom: 0})
  .to(".slide-4 img:nth-of-type(4)", 4, {bottom: '-100%'}, '=10')
  .to(".slide-4 .callout:nth-of-type(2)", 4, {opacity: 1,left:'4%'}, '-=0.5')
  .to(".slide-4 img:nth-of-type(5)", 4, {bottom: '0'}, '-=0.5')
  .to(".slide-4 img:nth-of-type(5)", 4, {bottom: '-100%'}, '=10')
  .to(".slide-4 .callout:nth-of-type(3)", 1, {opacity: 1,left:'4%'}, '-=0.5')
  .to(".slide-4 img:nth-of-type(6)", 4, {bottom: '0'}, '-=0.5')
  .to(".slide-4 img:nth-of-type(6)", 4, {bottom: '-100%'}, '=10')
  .to(".slide-4 img:nth-of-type(7)", 4, {opacity:1,left: '10%'}, '-=0.5')
  .to(".slide-4 .callout:nth-of-type(4)", 4, {opacity: 1,left:'4%'}, '-=0.5')
  .to(".slide-4 img:nth-of-type(7)", 4, {rotation: -90})

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-20%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-5 .callout:nth-of-type(1)", 4, {opacity: 1,left:'6%'})
  .to(".slide-5 img:nth-of-type(2)", 4, {opacity: 1, height:'100%', left:'50%', width: '100%', top: '0'})
  .to(".slide-5 img:nth-of-type(3)", 4, {opacity: 1, height:'100%', left:'50%', width: '100%', top: '0'})
  .to(".slide-5 .callout:nth-of-type(2)", 4, {opacity: 1, left:'6%'}, '-=1')
  .to(".slide-5 img:nth-of-type(4)", 4, {left: '50%', opacity: 1})
  .to(".slide-5 img:nth-of-type(5)", 4, {left: '50%', opacity: 1})
  .to(".slide-5 .callout:nth-of-type(3)", 4, {opacity: 1,left:'6%'}, '=6')
  .to(".slide-5 img:nth-of-type(6)", 4, {top: 0, opacity: 1})
  .to(".slide-5 img:nth-of-type(7)", 4, {top: 0, opacity: 1}, '-=4')
  .to(".slide-5 .callout:nth-of-type(4)", 4, {opacity: 1,left:'6%'}, '=6')

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-25%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-6 .callout:nth-of-type(1)", 4, {opacity: 1,left:'6%'})
  .to(".slide-6 img:nth-of-type(2)", 4, {opacity: 1}, '-=4')
  .to(".slide-6 .callout:nth-of-type(2)", 4, {opacity: 1,left:'4%'})
  .to(".slide-6 img:nth-of-type(3)", 4, {opacity: 1})
  .to(".slide-6 img:nth-of-type(4)", 4, {opacity: 1})
  .to(".slide-6 img:nth-of-type(5)", 4, {opacity: 1})
  .to(".slide-6 img:nth-of-type(6)", 4, {opacity: 1})
  .to(".slide-6 .callout:nth-of-type(3)", 4, {opacity: 1,left:'6%'})
  .to(".slide-6 img:nth-of-type(7)", 4, {opacity: 1})

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-30%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-7 .callout:nth-of-type(1)", 4, {opacity: 1, left:'6%'})
  .to(".slide-7 .callout:nth-of-type(2)", 4, {opacity: 1, left:'4%'})
  .to(".slide-7 img:nth-of-type(2)", 1, {opacity: 1}, '-=4')

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-35%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-8 img:nth-of-type(2)", 4, {left: '45%'})
  .to(".slide-8 .callout:nth-of-type(1)", 4, {opacity: 1, left:'6%'}, '-=2')
  .to(".slide-8 img:nth-of-type(3)", 12, {opacity: 1})
  .to(".slide-8 img:nth-of-type(2)", 4, {left: '55%'}, '-=14')
  .to(".slide-8 img:nth-of-type(2)", 4, {left: '50%'}, '-=10')
  .to(".slide-8 img:nth-of-type(2)", 4, {left: '45%'}, '-=6')
  .to(".slide-8 .callout:nth-of-type(2)", 4, {opacity: 1, left:'4%'}, '-=8')
  .to(".slide-8 img:nth-of-type(2)", 4, {left: '55%'}, '-=2')
  .to(".slide-8 img:nth-of-type(2)", 4, {left: '50%'})

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-40%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-9 img:nth-of-type(2)", 4, {top: '0', opacity: 1})
  .to(".slide-9 .callout:nth-of-type(1)", 4, {opacity: 1, left:'12%'}, '-=2')
  .to(".slide-9 .callout:nth-of-type(2)", 4, {opacity: 1, left:'8%'})


  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-45%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-10 img:nth-of-type(2)", 4, {opacity: 1})
  .to(".slide-10 img:nth-of-type(3)", 4, {opacity: 1})
  .to(".slide-10 .callout:nth-of-type(1)", 4, {opacity: 1, left:'8%'})
  .to(".slide-10 img:nth-of-type(4)", 4, {opacity: 1, top: 0}, '-=2')
  .to(".slide-10 .callout:nth-of-type(2)", 4, {opacity: 1, left:'6%'})
  .to(".slide-10 .callout:nth-of-type(3)", 4, {opacity: 1, left:'2%'})

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-50%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-11 .callout:nth-of-type(1)", 4, {opacity: 1, left:'8%'})
  .to(".slide-11 img:nth-of-type(2)", 4, {bottom: '0', opacity: 1})
  .to(".slide-11 .callout:nth-of-type(2)", 4, {opacity: 1, left:'6%'})

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-55%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-12 .callout:nth-of-type(1)", 4, {opacity: 1, left:'8%'})
  .to(".slide-12 img:nth-of-type(2)", 4, { opacity: 1})
  .to(".slide-12 .callout:nth-of-type(2)", 4, {opacity: 1, left:'6%'})
  .to(".slide-12 img:nth-of-type(3)", 4, { opacity: 1})
  .to(".slide-12 .callout:nth-of-type(3)", 4, {opacity: 1, left:'4%'})

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-60%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-13 img:nth-of-type(2)", 4, { top: 0, opacity: 1})
  .to(".slide-13 .callout:nth-of-type(1)", 4, { opacity: 1, left: '8%'})
  .to(".slide-13 .callout:nth-of-type(2)", 4, { opacity: 1, left: '6%'})

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-65%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-14 img:nth-of-type(2)", 4, { top: '0',opacity:1})
  .to(".slide-14 .callout:nth-of-type(1)", 4, { opacity: 1, left: '8%'})
  .to(".slide-14 .callout:nth-of-type(2)", 4, { opacity: 1, left: '6%'})
  .to(".slide-14 img:nth-of-type(2)", 8, { top: '-100%', opacity:0}, '=8')

  .to(".container-slides", 0.5, {z: -150}, '=15')
  .to(".container-slides", 1,   {x: "-70%"})
  .to(".container-slides", 0.5, {z: 0})

  .to(".slide-15 .card", 5, { transform: 'perspective(400px)', opacity: 1})
  .to(".slide-15 .callout:nth-of-type(1)", 4, { opacity: 1, left: '8%'})
  .to(".slide-15 .callout:nth-of-type(2)", 4, { opacity: 1, left: '6%'});


  new ScrollMagic.Scene({
    triggerElement: ".container-perspective",
    triggerHook: "onLeave",
    duration: "500%"
  })
  .setPin(".container-perspective")
  .setTween(wipeAnimation)
  .addTo(controller);

  var contacts = document.getElementsByClassName("contact");
  for (var i = 0; i < contacts.length; i++) {
    contacts[i].addEventListener("mouseover", function(event) {
      var parent = document.getElementsByClassName("contacts")[0];
      parent.style.backgroundColor = this.dataset.color;
    });
    contacts[i].addEventListener("mouseout", function(event) {
      var parent = document.getElementsByClassName("contacts")[0];
      parent.style.backgroundColor = "";
    });
  }

})();
