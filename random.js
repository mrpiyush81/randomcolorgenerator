const getcolor=()=>{
    const rednum= Math.floor( Math.random() * 16777215);
    const randomhexcode="#"+rednum.toString(16);
    console.log(rednum,randomhexcode);
    document.body.style.backgroundColor = randomhexcode;
  document.getElementById("color-code").innerText=randomhexcode;
  
  navigator.clipboard.writeText(randomhexcode);
}
document.getElementById('btn').addEventListener("click",getcolor);
getcolor();