let red= document.getElementById('red')
let green= document.getElementById('green')
let blue= document.getElementById('blue')
let yellow= document.getElementById('yellow')

console.log(yellow)

red.addEventListener('click', function(){
    document.body.style.backgroundColor= 'red'
})

green.addEventListener('click', function(){
    document.body.style.backgroundColor= 'green'
})

blue.addEventListener('click', function(){
    document.body.style.backgroundColor= 'blue'
})
yellow.addEventListener('click', function(){
    document.body.style.backgroundColor= 'yellow'
})