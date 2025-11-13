window.addEventListener('scroll', function () {
  const header = document.getElementById('mainHeader');
  if (window.scrollY > 1) {
    header.classList.add('scrolled');
    document.getElementById("titleImg").classList.add("imgScrolled")
    document.getElementById("titleImg").classList.remove("starterImg")

    document.querySelector("article").style.display = "block"
    document.getElementById("filler").style.display = "none"
  } else {
    header.classList.remove('scrolled');
    document.getElementById("titleImg").classList.remove("imgScrolled")
    document.getElementById("titleImg").classList.add("starterImg")

    document.querySelector("article").style.display = "none"
    document.getElementById("filler").style.display = "block"
  }
});