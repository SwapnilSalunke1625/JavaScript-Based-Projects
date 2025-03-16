const dropsown=document.querySelectorAll(".dropdown select");
console.log(dropsown)

for(let select of dropsown){
    for(currCode in countryList){
        let newOption=document.createElement("option")
        newOption.innerText=currCode
        newOption.value=currCode

        select.append(newOption)


    }   

}