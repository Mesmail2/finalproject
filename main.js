/* Navbar style inspired by Jacob Padgett https://padgett3.github.io/#project-header"*/

let navOpen = false;

function toggleNav() {
  if (navOpen === true) {
    document.getElementById("nav-collapsible").style.height = "0px";
    navOpen = false;
  } else {
    document.getElementById("nav-collapsible").style.height = "150px";
    navOpen = true;
  }
}
