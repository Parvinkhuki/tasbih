const alhamdulillahDisplay=document.getElementById("allhamdulillahvalue")
const alhadulillahBttn=document.getElementById("alhamdulillahBtn")
const decrementdisplay=document.getElementById("Decrement1")
const subhanallahDisplay=document.getElementById("subhanallahvalue")
const subhanallahBttn=document.getElementById("subanallahBtn")
const decrement2display=document.getElementById("Decrement2")
const allahuakbarDisplay=document.getElementById("allahakbarvalue")
const allahuakbarBttn=document.getElementById("allahuakbarBtn")
const decrement3display=document.getElementById("Decrement3")
const resetbttn=document.getElementById("ResetBtn")

let IntialValue1=0;
let IntialValue2=0;
let IntialValue3=0;


function increment(){
    if(IntialValue1===33){
        let result= alhamdulillahDisplay.innerText= "Done"
        return result;
    }
   IntialValue1++;
   alhamdulillahDisplay.innerText=IntialValue1;
   console.log( alhamdulillahDisplay.innerText) 
}
function decrement(){
    if(IntialValue1<=0){
        let result=alert("its value will Never neg" )
        return result;
    }
    IntialValue1-=1;
    alhamdulillahDisplay.innerText=IntialValue1;
    console.log( alhamdulillahDisplay.innerText)
}
alhadulillahBttn.addEventListener("click",increment)
decrementdisplay.addEventListener("click",decrement)

function increment1(){
    if(IntialValue2===33){
        let result= subhanallahDisplay.innerText= "Done"
        return result;
    }
   IntialValue2++;
   subhanallahDisplay.innerText=IntialValue2;
   console.log( subhanallahDisplay.innerText) 
}
function decrement1(){
    if(IntialValue2<=0){
        let result=alert("its value will Never neg" )
        return result;
    }
    IntialValue2-=1;
    subhanallahDisplay.innerText=IntialValue2;
    
}
subhanallahBttn.addEventListener("click",increment1)
decrement2display.addEventListener("click",decrement1)

function increment2(){
    if(IntialValue3===33){
        let result= allahuakbarDisplay.innerText= "Done"
        return result;
    }
   IntialValue3++;
   allahuakbarDisplay.innerText=IntialValue3;
 
}
function decrement2(){
    if(IntialValue3<=0){
        let result=alert("its value will Never neg" )
        return result;
    }
    IntialValue3-=1;
    allahuakbarDisplay.innerText=IntialValue3;
}
allahuakbarBttn.addEventListener("click",increment2)
decrement3display.addEventListener("click",decrement2)
resetbttn.addEventListener("click",function reset(){
    
allahuakbarDisplay.innerText=0;
subhanallahDisplay.innerText=0;
alhamdulillahDisplay.innerText=0;
 IntialValue1=0;
 IntialValue2=0;
 IntialValue3=0;

})


