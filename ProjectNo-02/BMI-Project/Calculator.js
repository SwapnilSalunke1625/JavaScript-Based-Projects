let form=document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let height=parseInt(document.querySelector("#height").value)
    let width=parseInt(document.querySelector("#width").value)
    let result=document.querySelector("#results")

    if(height==="" || height<0 || isNaN(height)){
        result.innerHTML="Please enter a valid height"
    }

    else if(width==="" || width<0 || isNaN(width)){
        result.innerHTML="Please enter a valid weight"
    }else{
        const bmi=width/(width/((height*height)/10000)).toFixed(2)
        // show the result
        result.innerHTML=`<Span>${bmi}</>`
    }
})