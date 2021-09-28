const select = seletor => document.querySelector(seletor)
const selectAll = seletor => document.querySelectorAll(seletor)

const navBar = select(".nav-bar")

document.addEventListener("scroll", () => {
  if(window.scrollY > 0){
    navBar && navBar.classList.add("nav-bar-white")
  }else{
    navBar && navBar.classList.remove("nav-bar-white")
  }
})