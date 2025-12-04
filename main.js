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


const formButton = document.getElementById("formButton");
formButton.addEventListener("click", () => {
  console.log("sad")
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfN_CXZKR1Fs__wsTfVA0vrhpv4F2Inl8bFhBiZOYWfZpnG9A/viewform?usp=header";
})