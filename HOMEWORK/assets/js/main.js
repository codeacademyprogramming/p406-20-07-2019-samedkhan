var toggleButton = document.querySelectorAll(".toggleMenu");

toggleButton.forEach((element)=>{
    element.addEventListener("click", ()=>{
        if(element.children[1].classList.contains("show")){
            element.children[1].classList.remove("show");
        }
        else{
            element.children[1].classList.add("show");
        }
        
    })
})

