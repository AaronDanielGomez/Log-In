
const input = document.querySelector(".input__password")

const conteinerIcon = document.querySelector(".conteiner__icon-eye")

const eyeClosed = document.querySelector(".eye__closed")

const eyeOpen = document.createElement("span")
eyeOpen.classList.add("icon","eye__open","material-symbols-outlined")
eyeOpen.textContent = "visibility"


conteinerIcon.addEventListener("click",()=>{
    if(input.type == "password"){ 
        conteinerIcon.replaceChild(eyeOpen,eyeClosed)
        input.type = "text"
    }else{
        conteinerIcon.replaceChild(eyeClosed,eyeOpen)
        input.type = "password"
    }
})