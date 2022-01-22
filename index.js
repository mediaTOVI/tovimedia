document.getElementById("scriptblocker").innerHTML = "";

const content = document.getElementById("mainbody");
document.addEventListener("scroll", (e) => {
  var scrolled = document.scrollingElement.scrollTop;
  var position = content.offsetTop;

  if (scrolled > position + 2) {
    document.getElementById("topnav").style.backgroundColor = "rgb(50, 50, 50, 0.5)";
    document.getElementById("navlogo").src = 'site-images/tovipngwhite.svg';
  }else if (scrolled < position - 2) {
    document.getElementById("topnav").style.backgroundColor = "rgb(256, 256, 256, 0.8)";
    document.getElementById("navlogo").src = 'site-images/toviblackpng.svg';
  }
});



function readAbout(){
  var element = document.querySelector("#mainbodylift");

// smooth scroll to element and align it at the bottom
element.scrollIntoView({ behavior: 'smooth'});
}
