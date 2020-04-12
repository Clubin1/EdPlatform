window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navBar").style.height = "5rem";
  } else {
    document.getElementById("navBar").style.height = "7rem";
  }
}