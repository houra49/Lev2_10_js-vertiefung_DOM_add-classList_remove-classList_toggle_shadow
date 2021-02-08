const head = document.getElementById("element")
function small() {
    head.classList.remove("middle", "gross")
    head.classList.add("klein")
}
function middle() {
    head.classList.remove("klein", "gross")
    head.classList.add("middle")
}
function gross() {
    head.classList.remove("middle", "klein")
    head.classList.add("gross")
}