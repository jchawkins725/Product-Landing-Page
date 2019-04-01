document.getElementById("navicon").addEventListener("click",
function responsiveNav() {
  const x = document.getElementById("responsive-navbar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
    var y = document.getElementById("bars");
    y.classList.toggle("fa-times");
  }
);