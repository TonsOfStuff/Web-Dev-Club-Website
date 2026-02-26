window.addEventListener('scroll', function () {
  const header = document.getElementById('mainHeader');
  if (window.screen.width > 848){
    if (window.scrollY > 0) {
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

      const chunks = document.querySelectorAll(".chunk");
      chunks.forEach((element) => element.classList.remove("shownItem"));
    }
  }
  
});


const formButton = document.getElementById("formButton");
formButton.addEventListener("click", () => {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfN_CXZKR1Fs__wsTfVA0vrhpv4F2Inl8bFhBiZOYWfZpnG9A/viewform?usp=header";
})

//Scroll and show item code
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add("shownItem");
      }
  })
});
const chunks = document.querySelectorAll(".chunk");
chunks.forEach((element) => observer.observe(element));
