let quotes=[{
    writings: ' Life is like a landscape you live in the midst br of it butcan only decsribe it from the vantge of a good distance',
    author:' Charles Lindelof'
},
{
    writings: 'Life is spiritual and to win in life, you have to win from a place of prayer and the word. ',
    author:' PCO'
},
{
    writings: 'Whatever you give attention to is what grows and whether you plant it or not something will grow ',
    author:' PCA'
},
{
    writings:' Information is key and superior information puts you ahead in life las las',
    author:' PEO'
}

]

let generate= document.getElementById('generate')
let text=document.getElementById('text')
let author= document.getElementById('author')

let currentText=0
console.log(quotes[currentText])

generate.addEventListener('click' , function next(){
   text.textContent= quotes[currentText].writings;
   author.innerHTML= quotes[currentText].author;
})

generate.addEventListener('click' , function next(){
    currentText++
    if(currentText>quotes.length){
        currentText=0
    }
})
  
// generate.addEventListener('click' , function randomQ(){
//     text.innerHTML= quotes[currentText].text;
//     author.innerHTML= quotes[currentText].author;
    
//  })
//  function randomQ(){
//     return Math.floor(Math.random()*quotes.length-2) 
//  }

//  generate.addEventListener('click' , function(){
//      randomQ()
//  })
 







