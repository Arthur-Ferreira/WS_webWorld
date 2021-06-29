const carousel = document.querySelector(".carousel-items").addEventListener("wheel", scroll)
const partnes = document.querySelector(".partners-lst").addEventListener("wheel", scroll)

function scroll (event) {
    if(event.deltaY > 0) {
        event.target.scrollBy(300, 0)
    } else {
        event.target.scrollBy(-300, 0)
    }
}