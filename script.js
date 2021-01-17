var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
    document.getElementById('open-slide').style.top = '1.5rem';
  } else {
    document.getElementById('navbar').style.top = "-70px";
    document.getElementById('open-slide').style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

function openSlideMenu() {
  document.getElementById('side-navbar').style.width = "65vw";
}

function closeSlideMenu() {
  document.getElementById('side-navbar').style.width = '0';
}

document.querySelector('.btn-open').addEventListener('click', openSlideMenu);
document.querySelector('.btn-close').addEventListener('click', closeSlideMenu);