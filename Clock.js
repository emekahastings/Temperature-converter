let time= document.getElementById('time')

setInterval( function ()  {
    let day= new Date()
  console.log(day)
time.innerHTML= day.toLocaleTimeString()
}, 1000 );




























