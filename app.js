let F= document.getElementById('faren');
let display= document.getElementById('display');
let calculate= document.getElementById('button');


function toCelsius(){

    answer= (F.value-32)*5/9
    return answer;
}

console.log(F.value) 

calculate.addEventListener('click' , function(){
     toCelsius()
    
   display.value= answer
})
// Next one
let C= document.getElementById('cel')
let fdisplay= document.getElementById('show')
let solve= document.getElementById('d-button')
 console.log(solve)

function toFarenheit(){

    solution= (C.value *9/5)+32
    return solution;
}
solve.addEventListener('click' , function(){
    toFarenheit()
    fdisplay.value= solution
})






