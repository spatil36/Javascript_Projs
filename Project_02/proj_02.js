const container = document.querySelector('.container')
console.log(container)

const form =  document.querySelector('form')
console.log(form)


form.addEventListener('submit', function(e){
    e.preventDefault()

    const ht = parseInt(document.querySelector('#height').value)
    const kg = parseInt(document.querySelector('#weight').value)
    const res = document.querySelector('#results')

    if(ht === '' || ht <=0 || isNaN(ht)) {
        res.innerHTML = "Please give valid height";
    }

    else if(kg === '' || kg <=0 || isNaN(kg)) {
        res.innerHTML = "Please give valid weight";
    }

    else {
        const bmi = (kg / ((ht*ht)/10000)).toFixed(2)

        if(bmi<18.6){
            res.innerHTML = `<span> Your BMI is Under weight = ${bmi} </span>`
        }
        else if(bmi>18.6  && bmi<24.9){
            res.innerHTML = `<span> Your BMI is Normal range = ${bmi} </span>`
        }
        else {
            res.innerHTML = `<span> Your BMI is Overweight = ${bmi} </span>`
        }

        //res.innerHTML = `<span> ${bmi} </span>`
    }
})

// const cmTom = container.id

// console.log(cmTom)