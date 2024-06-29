let display= document.getElementById("display");
let buttons=document.getElementsByClassName("btn");

let string="";
// let temp;
let array=Array.from(buttons);
array.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML==='=')
        {
            // temp=eval(string);
            // string=temp.toString();
            // display.value=string.substring(0,7);
            string=eval(string);
            display.value=string;
        }
        else if(e.target.innerHTML==='AC')
        {
            string="";
            display.value="";
        }
        else if(e.target.innerHTML==='DEL')
        {
            string=string.substring(0,string.length-1);
            display.value=string;
        }
        else
        {
            string+=e.target.innerHTML;
            display.value=string;
        }
    })
})