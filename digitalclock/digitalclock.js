let ampm=document.getElementById("ampm")
function dateTime(){
const time=new Date()
let hr=time.getHours()
let mnts=time.getMinutes()
let secs=time.getSeconds()
if(hr>12){
    hr=hr-12
    ampm.innerHTML="PM"
}
document.getElementById("hour").innerHTML=padZero(hr)
document.getElementById("minutes").innerHTML=padZero(mnts)
document.getElementById("sec").innerHTML=padZero(secs)
}
function padZero(time){
   return time<10?"0"+time:time
}
setInterval(dateTime,500)