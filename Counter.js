let next= document.getElementById('next')
let previous= document.getElementById('previous')
let reset= document.getElementById('reset')
let number= document.getElementById('startpoint')
console.log(number)

let figure= 0
next.addEventListener( 'click' ,  function increase(){
    
    if (previous.classList.contains('next')){
        
    }
    number.innerHTML= figure++
})
   
previous.addEventListener('click' ,function decrease(){
     if (previous.classList.contains('prev')){
        
     }
     number.innerHTML=figure--
})

reset.addEventListener('click' , function(){
    if(reset.classList.contains('adjust')){
        figure=0
    }
    number.innerHTML= 0
})
  


    
