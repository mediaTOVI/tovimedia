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