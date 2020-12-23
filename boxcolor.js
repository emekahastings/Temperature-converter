let colors= [ 'red', 'blue', 'green', 'grey', 'orange', 'yellow']
let next= document.getElementById('next')
let random= document.getElementById('random')
let still= document.getElementById('still')
let box=document.getElementById('background')

random.addEventListener('click' , function(){
movesNow()
})

function movesNow(){

for(i=0; i<6; i++){
    
}
     box.style.background=colors[randomColor()]
     box.innerHTML=colors[randomColor()]

     function randomColor(){
        return Math.floor(Math.random()*colors.length)
    
    }
}
still.addEventListener('click' , function(){
    setTimeout(movesNow(), 2);
})

stile=document.getAnimations('box')
stile.addEventListener('click', function(){
    movesNow()
})