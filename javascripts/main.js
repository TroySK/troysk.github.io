/*!
loadCSS: load a CSS file asynchronously.
[c]2015 @scottjehl, Filament Group, Inc.
Licensed MIT
*/
(function(w){ "use strict"; var loadCSS = function( href, before, media ){ var doc = w.document; var ss = doc.createElement( "link" ); var ref; if( before ){ ref = before; } else { var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes; ref = refs[ refs.length - 1]; } var sheets = doc.styleSheets; ss.rel = "stylesheet"; ss.href = href; ss.media = "only x"; ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) ); var onloadcssdefined = function( cb ){ var resolvedHref = ss.href; var i = sheets.length; while( i-- ){ if( sheets[ i ].href === resolvedHref ){ return cb(); } } setTimeout(function() { onloadcssdefined( cb ); }); }; ss.onloadcssdefined = onloadcssdefined; onloadcssdefined(function() { ss.media = media || "all"; }); return ss; }; if( typeof module !== "undefined" ){ module.exports = loadCSS; } else { w.loadCSS = loadCSS; } }( typeof global !== "undefined" ? global : this ));
loadCSS("/stylesheets/style.css");
(function(){'use strict';var f=[];function g(a){f.push(a);1===f.length&&l()}function m(){for(;f.length;)f[0](),f.shift()}if(window.MutationObserver){var n=document.createElement("div");(new MutationObserver(m)).observe(n,{attributes:!0});var l=function(){n.setAttribute("x",0)}}else l=function(){setTimeout(m)};function p(a){this.a=q;this.b=void 0;this.f=[];var b=this;try{a(function(a){r(b,a)},function(a){t(b,a)})}catch(c){t(b,c)}}var q=2;function u(a){return new p(function(b,c){c(a)})}function v(a){return new p(function(b){b(a)})}
function r(a,b){if(a.a===q){if(b===a)throw new TypeError("Promise settled with itself.");var c=!1;try{var d=b&&b.then;if(null!==b&&"object"===typeof b&&"function"===typeof d){d.call(b,function(b){c||r(a,b);c=!0},function(b){c||t(a,b);c=!0});return}}catch(e){c||t(a,e);return}a.a=0;a.b=b;w(a)}}function t(a,b){if(a.a===q){if(b===a)throw new TypeError("Promise settled with itself.");a.a=1;a.b=b;w(a)}}
function w(a){g(function(){if(a.a!==q)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0===a.a?"function"===typeof c?e(c.call(void 0,a.b)):e(a.b):1===a.a&&("function"===typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}p.prototype.g=function(a){return this.c(void 0,a)};p.prototype.c=function(a,b){var c=this;return new p(function(d,e){c.f.push([a,b,d,e]);w(c)})};
function x(a){return new p(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e===a.length&&b(h)}}var e=0,h=[];0===a.length&&b(h);for(var k=0;k<a.length;k+=1)v(a[k]).c(d(k),c)})}function y(a){return new p(function(b,c){for(var d=0;d<a.length;d+=1)v(a[d]).c(b,c)})};window.Promise||(window.Promise=p,window.Promise.resolve=v,window.Promise.reject=u,window.Promise.race=y,window.Promise.all=x,window.Promise.prototype.then=p.prototype.c,window.Promise.prototype["catch"]=p.prototype.g);}());
/* Font face observer */ 
(function(){'use strict';function h(a){document.body?a():document.addEventListener("DOMContentLoaded",a)};function v(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.g=document.createElement("span");this.f=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.g.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;";this.b.appendChild(this.h);this.c.appendChild(this.g);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function w(a,c,b){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:"+c+";"+b}function x(a){var c=a.a.offsetWidth,b=c+100;a.g.style.width=b+"px";a.c.scrollLeft=b;a.b.scrollLeft=a.b.scrollWidth+100;return a.f!==c?(a.f=c,!0):!1}
function y(a,c){a.b.addEventListener("scroll",function(){x(a)&&null!==a.a.parentNode&&c(a.f)},!1);a.c.addEventListener("scroll",function(){x(a)&&null!==a.a.parentNode&&c(a.f)},!1);x(a)};function z(a,c){var b=c||{};this.family=a;this.style=b.style||"normal";this.variant=b.variant||"normal";this.weight=b.weight||"normal";this.stretch=b.stretch||"normal";this.featureSettings=b.featureSettings||"normal"}var B=null;
z.prototype.a=function(a,c){var b=a||"BESbswy",C=c||3E3,k="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",g=document.createElement("div"),l=new v(b),m=new v(b),n=new v(b),d=-1,e=-1,f=-1,q=-1,r=-1,t=-1,p=this;return new Promise(function(a,b){function c(){null!==g.parentNode&&g.parentNode.removeChild(g)}
function u(){if(-1!==d&&-1!==e||-1!==d&&-1!==f||-1!==e&&-1!==f)if(d===e||d===f||e===f){if(null===B){var b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}B?d===q&&e===q&&f===q||d===r&&e===r&&f===r||d===t&&e===t&&f===t||(c(),a(p)):(c(),a(p))}}h(function(){function a(){if(Date.now()-D>=C)c(),b(p);else{var A=document.hidden;if(!0===A||void 0===A)d=l.a.offsetWidth,e=m.a.offsetWidth,f=n.a.offsetWidth,
u();setTimeout(a,50)}}var D=Date.now();w(l,"sans-serif",k);w(m,"serif",k);w(n,"monospace",k);g.appendChild(l.a);g.appendChild(m.a);g.appendChild(n.a);document.body.appendChild(g);q=l.a.offsetWidth;r=m.a.offsetWidth;t=n.a.offsetWidth;a();y(l,function(a){d=a;u()});w(l,'"'+p.family+'",sans-serif',k);y(m,function(a){e=a;u()});w(m,'"'+p.family+'",serif',k);y(n,function(a){f=a;u()});w(n,'"'+p.family+'",monospace',k)})})};window.FontFaceObserver=z;window.FontFaceObserver.prototype.check=z.prototype.a;}());
var observer = new FontFaceObserver("komika_displayregular", {});
observer.check('Hii', 10000).then(function () {
  var body = document.getElementsByTagName("body")[0];
  body.className = body.className + " fonts-loaded";
});
(function () {
  var controller = new ScrollMagic.Controller();

  var animation = new TimelineMax()
  .to(".slide-1 .thought", 4, {opacity: 0,display:'none'})
  .to(".slide-1 .callout:nth-of-type(2)", 8, {opacity: 1,left:'40%'})
  .to(".slide-1 .callout:nth-of-type(3)", 8, {opacity: 1,left:'50%'})
  .to(".slide-1 .callout:nth-of-type(4)", 8, {opacity: 1,left:'50%'})
  .to(".slide-1 .callout:nth-of-type(5)", 8, {opacity: 1,left:'50%'})
  .to(".slide-1 .callout:nth-of-type(6)", 8, {opacity: 1,left:'50%'})

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

  .to(".slide-9 img:nth-of-type(1)", 8, {top: '10rem', opacity: 1})
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
setTimeout(function(){
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-70129298-1', 'auto');
  ga('send', 'pageview');
}, 5000);
