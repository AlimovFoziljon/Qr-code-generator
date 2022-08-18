let input = document.getElementById("input")
let button = document.getElementById("button")
let text = document.getElementById("text")
let image = document.getElementById("img")

button.addEventListener('click', getQr)

function getQr(){
    let inputValue = input.value
    image.style.display = "flex"
    if(!inputValue){
        image.style.display = "none"
        text.style.display = "flex"
    } else{
        text.style.display = "none"
    }
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
}
