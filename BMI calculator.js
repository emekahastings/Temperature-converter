let height= document.getElementById('height')
let weight= document.getElementById('weight')
let calculate= document.getElementById('button')

function getBmi(){
    result= (weight.value/height.value)
}

calculate.addEventListener('click' , function(){
getBmi()
alert(result) 

})

