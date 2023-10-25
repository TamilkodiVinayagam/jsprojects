let colorText=document.getElementById("hex")

let wrap=document.getElementById("wrap")
let btn=document.querySelector("#btn")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
function hexColor(){
   
    let hexcolor=Math.floor(Math.random()*hex.length)
    return hex[hexcolor]
}
btn.addEventListener("click",function(){
    let colorStr="#"
for(let i=0;i<6;i++){
colorStr=colorStr+hexColor()
}
    wrap.style.backgroundColor=colorStr
    colorText.innerHTML=colorStr
})
