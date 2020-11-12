
const navList = document.querySelector("#navbar__list")
const sections = document.querySelectorAll("section")
let links="";
document.addEventListener('DOMContentLoaded', (event) => {
    //navbar

    console.log("inside adding")
    let n = 1
    sections.forEach(section => {
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.classList.add("menu__link")
        a.setAttribute("href", `#section${n}`)
        a.textContent = `Section ${n}`
        li.appendChild(a)
        navList.appendChild(li)
        n++
    })


     links = document.querySelectorAll(".menu__link")

    links.forEach(link => {
        link.addEventListener("click", scroll)
    })

    function scroll(event) {
        event.preventDefault()
        const section = document.querySelector(event.target.getAttribute("href"))
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
        hideMenu()
    }
})

// hide menu for small devices when a link is clicked
function hideMenu(){
    let toggle = document.querySelector("#toggle").checked = false;

}

// scroll to the top button
const toTop = document.querySelector(".to-top")
toTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

//navbar links active state
window.addEventListener("scroll", function (event){
    let windowDistance = window.scrollY +70

    links.forEach(link=>{
        let section = document.querySelector(link.getAttribute("href"))
        let sectionBottom =  section.offsetTop + section.offsetHeight
        let sectionTop = section.offsetTop
        // handle classes based on viewport
        if (windowDistance>=sectionTop && sectionBottom  >= windowDistance){
            link.classList.add("Active")
            section.classList.add("active")
        }else {
            link.classList.remove("Active")
            section.classList.remove("active")
        }
    })
})







