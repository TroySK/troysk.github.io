/*!
loadCSS: load a CSS file asynchronously.
[c]2015 @scottjehl, Filament Group, Inc.
Licensed MIT
*/
(function(w){ "use strict"; var loadCSS = function( href, before, media ){ var doc = w.document; var ss = doc.createElement( "link" ); var ref; if( before ){ ref = before; } else { var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes; ref = refs[ refs.length - 1]; } var sheets = doc.styleSheets; ss.rel = "stylesheet"; ss.href = href; ss.media = "only x"; ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) ); var onloadcssdefined = function( cb ){ var resolvedHref = ss.href; var i = sheets.length; while( i-- ){ if( sheets[ i ].href === resolvedHref ){ return cb(); } } setTimeout(function() { onloadcssdefined( cb ); }); }; ss.onloadcssdefined = onloadcssdefined; onloadcssdefined(function() { ss.media = media || "all"; }); return ss; }; if( typeof module !== "undefined" ){ module.exports = loadCSS; } else { w.loadCSS = loadCSS; } }( typeof global !== "undefined" ? global : this ));
loadCSS("/stylesheets/style.css");
var observer = new FontFaceObserver("komika_displayregular", {});
observer.check('Hii', 10000).then(function () {
  var body = document.getElementsByTagName("body")[0];
  body.className = body.className + " fonts-loaded";
});
(function () {
  var controller = new ScrollMagic.Controller();

  var animation = new TimelineMax()
  .to(".slide-1 .callout:nth-of-type(1)", 8, {opacity: 1,left:'40%'})
  .to(".slide-1 .callout:nth-of-type(2)", 8, {opacity: 1,left:'46%'})
  .to(".slide-1 .callout:nth-of-type(3)", 8, {opacity: 1,left:'46%'})
  .to(".slide-1 .callout:nth-of-type(4)", 8, {opacity: 1,left:'46%'})
  .to(".slide-1 .callout:nth-of-type(5)", 8, {opacity: 1,left:'46%'})

  .to(".slide-1", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-2", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-2 img:nth-of-type(2)", 8, {height:'100%'})
  .to(".slide-2 img:nth-of-type(3)", 8, {opacity:1})
  .to(".slide-2 img:nth-of-type(4)", 8, {opacity:1})
  .to(".slide-2 .callout", 8, {opacity: 1, left:'4%'})
  .to(".slide-2 img:nth-of-type(3)", 8, {opacity:0, bottom:'21rem', top: 'auto'}, '=8')
  .to(".slide-2 img:nth-of-type(5)", 8, {opacity:1})
  .to(".slide-2 img:nth-of-type(5)", 12, {opacity:1, height:'100%', top:0})

  .to(".slide-2", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-3", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-3 img:nth-of-type(2)", 8, {opacity:1, top:0, 'z-index': 1})
  .to(".slide-3 .callout:nth-of-type(1)", 12, {opacity:1,left:'6%'})
  .to(".slide-3 img:nth-of-type(3)", 8, {opacity:1}, '-=8')
  .to(".slide-3 img:nth-of-type(4)", 8, {opacity:1, top:0}, '-=4')
  .to(".slide-3 .callout:nth-of-type(2)", 12, {opacity:1,left:'4%'})
  .to(".slide-3 img:nth-of-type(5)", 8, {width:'24%'})
  .to(".slide-3 img:nth-of-type(6)", 8, {width:'24%'})
  .to(".slide-3 img:nth-of-type(7)", 8, {width:'12%'})
  .to(".slide-3 img:nth-of-type(8)", 8, {width:'16%'})
  .to(".slide-3 .callout:nth-of-type(3)", 12, {opacity:1,left:'2%'})
  .to(".slide-3 img:nth-of-type(3), .slide-3 img:nth-of-type(5), .slide-3 img:nth-of-type(6), .slide-3 img:nth-of-type(7), .slide-3 img:nth-of-type(8)", 12, {opacity: 0, display: 'none'})
  .to(".slide-3 img:nth-of-type(9)", 12, {opacity:1}, '-=4')
  .to(".slide-3 img:nth-of-type(10)", 20, {opacity:1,top:'18%'}, '-=8')
  .to(".slide-3 img:nth-of-type(11)", 8, {opacity:1, top:0}, '-=12')

  .to(".slide-3", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-4", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-4 img:nth-of-type(2)", 8, {opacity: 1, top: '10%'})
  .to(".slide-4 img:nth-of-type(3)", 8, {opacity: 1, bottom: '15%'}, '-=8')
  .to(".slide-4 .callout:nth-of-type(1)", 4, {opacity: 1,left:'6%'}, '-=2')
  .to(".slide-4 img:nth-of-type(4)", 8, {bottom: 0})
  .to(".slide-4 img:nth-of-type(4)", 8, {bottom: '-100%'}, '=16')
  .to(".slide-4 .callout:nth-of-type(2)", 8, {opacity: 1,left:'4%'}, '-=2')
  .to(".slide-4 img:nth-of-type(5)", 8, {bottom: '0'}, '-=2')
  .to(".slide-4 img:nth-of-type(5)", 8, {bottom: '-100%'}, '=16')
  .to(".slide-4 .callout:nth-of-type(3)", 4, {opacity: 1,left:'4%'}, '-=2')
  .to(".slide-4 img:nth-of-type(6)", 8, {bottom: '0'}, '-=2')
  .to(".slide-4 img:nth-of-type(6)", 8, {bottom: '-100%'}, '=16')
  .to(".slide-4 img:nth-of-type(7)", 8, {opacity:1,left: '10%'}, '-=2')
  .to(".slide-4 .callout:nth-of-type(4)", 8, {opacity: 1,left:'4%'}, '-=2')
  .to(".slide-4 img:nth-of-type(7)", 8, {rotation: -90})

  .to(".slide-4", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-5", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-5 .callout:nth-of-type(1)", 8, {opacity: 1,left:'6%'})
  .to(".slide-5 img:nth-of-type(2)", 8, {opacity: 1, height:'100%', left:'50%', width: '100%', top: '0'})
  .to(".slide-5 img:nth-of-type(3)", 8, {opacity: 1, height:'100%', left:'50%', width: '100%', top: '0'})
  .to(".slide-5 .callout:nth-of-type(2)", 8, {opacity: 1, left:'6%'}, '-=4')
  .to(".slide-5 img:nth-of-type(4)", 8, {left: '50%', opacity: 1})
  .to(".slide-5 img:nth-of-type(5)", 8, {left: '50%', opacity: 1})
  .to(".slide-5 .callout:nth-of-type(3)", 8, {opacity: 1,left:'6%'}, '=12')
  .to(".slide-5 img:nth-of-type(6)", 8, {top: 0, opacity: 1})
  .to(".slide-5 img:nth-of-type(7)", 8, {top: 0, opacity: 1}, '-=8')
  .to(".slide-5 .callout:nth-of-type(4)", 8, {opacity: 1,left:'6%'}, '=12')

  .to(".slide-5", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-6", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-6 .callout:nth-of-type(1)", 8, {opacity: 1,left:'6%'})
  .to(".slide-6 img:nth-of-type(2)", 8, {opacity: 1}, '-=8')
  .to(".slide-6 .callout:nth-of-type(2)", 8, {opacity: 1,left:'4%'})
  .to(".slide-6 img:nth-of-type(3)", 8, {opacity: 1})
  .to(".slide-6 img:nth-of-type(4)", 8, {opacity: 1})
  .to(".slide-6 img:nth-of-type(5)", 8, {opacity: 1})
  .to(".slide-6 img:nth-of-type(6)", 8, {opacity: 1})
  .to(".slide-6 .callout:nth-of-type(3)", 8, {opacity: 1,left:'6%'})
  .to(".slide-6 img:nth-of-type(7)", 8, {opacity: 1})

  .to(".slide-6", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-7", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-7 .callout:nth-of-type(1)", 8, {opacity: 1, left:'6%'})
  .to(".slide-7 img:nth-of-type(2)", 8, {opacity: 1, transform: 'perspective(400px)'})
  .to(".slide-7 .callout:nth-of-type(2)", 8, {opacity: 1, left:'4%'})
  .to(".slide-7 img:nth-of-type(3)", 8, {opacity: 1}, '-=8')

  .to(".slide-7", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-8", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-8 img:nth-of-type(2)", 8, {transform: 'translate3d(0, 0, 0)', opacity: 1})
  .to(".slide-8 img:nth-of-type(3)", 8, {left: '45%'})
  .to(".slide-8 .callout:nth-of-type(1)", 8, {opacity: 1, left:'6%'}, '-=4')
  .to(".slide-8 img:nth-of-type(4)", 24, {opacity: 1})
  .to(".slide-8 img:nth-of-type(3)", 8, {left: '55%'}, '-=28')
  .to(".slide-8 img:nth-of-type(3)", 8, {left: '50%'}, '-=20')
  .to(".slide-8 img:nth-of-type(3)", 8, {left: '45%'}, '-=12')
  .to(".slide-8 .callout:nth-of-type(2)", 8, {opacity: 1, left:'4%'}, '-=16')
  .to(".slide-8 img:nth-of-type(3)", 8, {left: '55%'}, '-=4')
  .to(".slide-8 img:nth-of-type(3)", 8, {left: '50%'})

  .to(".slide-8", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-9", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-9 img:nth-of-type(1)", 8, {top: '0', opacity: 1})
  .to(".slide-9 .callout:nth-of-type(1)", 8, {opacity: 1, left:'12%'}, '-=4')
  .to(".slide-9 .callout:nth-of-type(2)", 8, {opacity: 1, left:'8%'})

  .to(".slide-9", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-10", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-10 img:nth-of-type(2)", 8, {opacity: 1})
  .to(".slide-10 img:nth-of-type(3)", 8, {opacity: 1})
  .to(".slide-10 .callout:nth-of-type(1)", 8, {opacity: 1, left:'8%'})
  .to(".slide-10 img:nth-of-type(4)", 8, {opacity: 1, top: 0}, '-=4')
  .to(".slide-10 .callout:nth-of-type(2)", 8, {opacity: 1, left:'6%'})
  .to(".slide-10 .callout:nth-of-type(3)", 8, {opacity: 1, left:'2%'})

  .to(".slide-10", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-11", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-11 .callout:nth-of-type(1)", 8, {opacity: 1, left:'8%'})
  .to(".slide-11 img:nth-of-type(2)", 8, {opacity: 1, transform: 'perspective(400px)'})
  .to(".slide-11 .callout:nth-of-type(2)", 8, {opacity: 1, left:'6%'})

  .to(".slide-11", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-12", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-12 .callout:nth-of-type(1)", 8, {opacity: 1, left:'8%'})
  .to(".slide-12 img:nth-of-type(2)", 8, { opacity: 1})
  .to(".slide-12 .callout:nth-of-type(2)", 8, {opacity: 1, left:'6%'})
  .to(".slide-12 img:nth-of-type(3)", 8, { opacity: 1})
  .to(".slide-12 .callout:nth-of-type(3)", 8, {opacity: 1, left:'4%'})

  .to(".slide-12", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-13", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-13 img:nth-of-type(2)", 8, { top: 0, opacity: 1})
  .to(".slide-13 .callout:nth-of-type(1)", 8, { opacity: 1, left: '8%'})
  .to(".slide-13 .callout:nth-of-type(2)", 8, { opacity: 1, left: '6%'})

  .to(".slide-13", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-14", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-14 img:nth-of-type(2)", 16, { top: '0',opacity:1})
  .to(".slide-14 .callout:nth-of-type(1)", 8, { opacity: 1, left: '8%'})
  .to(".slide-14 .callout:nth-of-type(2)", 8, { opacity: 1, left: '6%'})
  .to(".slide-14 img:nth-of-type(2)", 16, { top: '-100%', opacity:0}, '=16')

  .to(".slide-14", 8, {opacity: 0, display: 'none'}, '=16')
  .to(".slide-15", 8, {opacity: 1, display: 'flex'}, '-=8')

  .to(".slide-15 .card", 8, { transform: 'perspective(400px)', opacity: 1})
  .to(".slide-15 .callout:nth-of-type(1)", 8, { opacity: 1, left: '8%'})
  .to(".slide-15 .callout:nth-of-type(2)", 8, { opacity: 1, left: '6%'})
  .to(".slide-15 .callout:nth-of-type(3)", 8, { opacity: 1, left: '6%'});

  new ScrollMagic.Scene({
    triggerElement: ".container-perspective",
    triggerHook: "onLeave",
    duration: "500%"
  })
  .setPin(".container-perspective")
  .setTween(animation)
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
loadCSS("//fonts.googleapis.com/css?family=Roboto:100");
loadCSS("//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-70129298-1', 'auto');
ga('send', 'pageview');
