const form  =  document.querySelector("form")

form.addEventListener("submit", (f) =>{
    f.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    
    const under = document.querySelector("#under")
    const normal = document.querySelector("#normal")
    const over = document.querySelector("#over")
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        var bmi = (weight / ((height*height) / 10000)).toFixed(2)

        results.innerHTML = `<span>${bmi}</span>`


        let chk = 0
        if (bmi <= 18.6) {
            under.style.backgroundColor = "green";
        } else if (bmi > 18.6 && bmi <= 24.9) {
            normal.style.backgroundColor = "yellow";
        } else if (bmi > 24.9) {
            over.style.backgroundColor = "red";
        } else {
            results.innerHTML = "Not Defined";
        }
        
    }
    
    
})