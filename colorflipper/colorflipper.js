let hex=document.getElementById("hex")

let wrap=document.getElementById("wrap")
let btn=document.querySelector("#btn")
function hexColor(){
   const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexcolor=Math.floor(Math.random()*hex.length)
    return hex[hexcolor]
}
function colorCode(){
    
    let str="#"
for(let i=0;i<6;i++){
str=str+hexColor()
}
return str
}

btn.addEventListener("click",function(){
    wrap.style.backgroundColor=colorCode()
    hex.innerHTML=colorCode()
})
