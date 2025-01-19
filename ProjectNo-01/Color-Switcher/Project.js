const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")
const span=document.querySelector("#span1")

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener("click", function(e){
        console.log(e.target)
        console.log(e)

    // this is for grey color
        if(e.target.id=="grey"){
            body.style.backgroundColor="grey" 
            
            // we can also write like this 
            // body.style.backgroundColor=e.target.id
        }

         // this is for grey color
         if(e.target.id=="yellow"){
            // body.style.backgroundColor="grey" 
            // we can also write like this 
            body.style.backgroundColor=e.target.id
        }

         // this is for grey color
         if(e.target.id=="green"){
            // body.style.backgroundColor="grey" 
            // we can also write like this 
            body.style.backgroundColor=e.target.id
        }

         // this is for grey color
         if(e.target.id=="blue"){
            // body.style.backgroundColor="grey" 
            // we can also write like this 
            body.style.backgroundColor=e.target.id
        }

         // this is for grey color
         if(e.target.id=="Pink"){
            // body.style.backgroundColor="grey" 
            // we can also write like this 
            body.style.backgroundColor=e.target.id
        }

         // this is for grey color
         if(e.target.id=="grey"){
            body.style.backgroundColor="grey" 
            // we can also write like this 
            // body.style.backgroundColor=e.target.id
        }
    })
})

