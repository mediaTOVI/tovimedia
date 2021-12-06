document.getElementById("scriptblocker").innerHTML = "";

const content = document.getElementById("mainbody");
document.addEventListener("scroll", (e) => {
  var scrolled = document.scrollingElement.scrollTop;
  var position = content.offsetTop;

  if (scrolled > position + 2) {
    document.getElementById("topnav").style.backgroundColor = "rgb(50, 50, 50, 0.5)";
    document.getElementById("navlogo").src = 'site-images/tovipngwhite.svg';
  }else if (scrolled < position - 2) {
    document.getElementById("topnav").style.backgroundColor = "rgb(256, 256, 256, 0.5)";
    document.getElementById("navlogo").src = 'site-images/toviblackpng.svg';
  }
});

(function(){

  var parallaxbody = document.querySelectorAll("body"),
      speedbody = 0.5;

  window.onscroll = function(){
    [].slice.call(parallaxbody).forEach(function(el,i){

      var windowYOffsetbody = window.pageYOffset,
          elBackgrounPosbody = "50% " + (windowYOffsetbody * speedbody) + "px";

      el.style.backgroundPosition = elBackgrounPosbody;

    });
  };

})();

function readAbout(){
var y = $(window).scrollTop();
 $('html, body').animate({ scrollTop: 965 })
}
