var toggleButton = document.querySelectorAll("a[data-dropmenu]");

console.log(toggleButton);

toggleButton.forEach(element=>{
    element.addEventListener("click", ()=>{
        element.nextElementSibling.classList.toggle("active");
        
    })
});

window.addEventListener("click", (e)=>{
    
    toggleButton.forEach(element=>{
        if(e.target!=element){
            element.nextElementSibling.classList.remove("active");
        }
       
    })  
  
})