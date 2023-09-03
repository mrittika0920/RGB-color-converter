var rangeInp=document.querySelectorAll('input');
 var fill=document.querySelectorAll('.fill');
 var val=document.querySelectorAll('.val');
var rgb_val=document.querySelectorAll('.rgb-val');
var color_display=document.querySelector('.color-display');
 
var color_code=[0,0,0];
 
 for(let i=0;i<rangeInp.length;i++){
    const element= rangeInp[i];
 
    rangeInp.oninput =()=>{
        var x= 18/255* range.value;
        fill[i].style.width= x +'rem';
         val[i].innerHTML=range.value;
 
       color_code[i]=range.value;
        rgb_val.innerHTML =`RGB(${color_code})`;
        color_display.style.backgroundColor =`RGB(${color_code})`;
    }
 }
