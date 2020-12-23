let details= [ {
id: 1,
name:'Sinach',
country: 'Nigeria',
image: 'sinach.jpg',
descrption:'Award wnnng arist, Senior minister of the Loveworld nation, waymaker crooner and a respected gospel artist in the world'
},
{
    id: 2,
    name:'Kirk Franklin',
    country: 'United States',
    image: 'kirk.jpg',
    descrption:'Award wnnng arist, Senior minister of the Loveworld nation, waymaker crooner and a respected gospel artist in the world'
},
{
    id: 3,
    name:'Travis Greene',
    country: 'United States',
    image: 'travis.jpg',
    descrption:'Award wnnng arist, Senior minister of the Loveworld nation, waymaker crooner and a respected gospel artist in the world'
},
{
    id: 4,
name:'Ada',
country: 'Nigeria',
image: 'ada.jpg',
descrption:'Award wnnng arist, Senior minister of the Loveworld nation, waymaker crooner and a respected gospel artist in the world'
},
{id: 5,
name:'Tasha',
country: 'United States',
image: 'tasha.jpg',
descrption:'Award wnnng arist, Senior minister of the Loveworld nation, waymaker crooner and a respected gospel artist in the world'
}
]
let next= document.getElementById('next')
let prev=document.getElementById('prev')
console.log(prev)
info= details[3].country


let image= document.getElementById("image1");
let name=document.getElementById("name");
let country=document.getElementById("country");
let desc= document.getElementById("desc")

let currentItem=0

next.addEventListener('click' , function actionTime(){
    item= details[currentItem]
    console.log(item)
    image.src= details[currentItem].image;
    name.innerHTML= details[currentItem].name;
    country.innerHTML= details[currentItem].country;
    desc.innerHTML= details[currentItem].descrption
    
})
time= details.length
console.log(time)
function increase(){
    currentItem++
    if (currentItem >details.length-1){
        currentItem=0
    }
}

next.addEventListener('click', function actionTime(){
   increase()
})

function decrease(){
    currentItem--
    if (currentItem > 0){
         currentItem= details.length-1
        
    }
}


prev.addEventListener('click', function actionTime(){
    decrease()
})



