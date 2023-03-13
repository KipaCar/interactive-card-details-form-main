//variables tarjeta pequeña
let nameCard=document.getElementById("card_name");
let numberCard=document.getElementById("card_pequeña");
let monthCard=document.getElementById("card_month");
let yearCard=document.getElementById("card_year");
let cvcCard=document.getElementById("card_cvc");

//variables del formulario
let inputName=document.getElementById("name");
let inputCard=document.getElementById("card")
let inputExpMM=document.getElementById("expMM");
let inputExpYY=document.getElementById("expYY");
let inputCvc=document.getElementById("cvc");



// Hay que traer los datos de la tarjeta que se rellena al ingresar los datos
inputName.addEventListener("input", () => {
    nameCard.innerText = inputName.value;

    if (inputName.value.length === 0) {
        nameCard.innerText = inputName.value;
    }
})
//Libreria para que tenga formato tarjeta
var cleave = new Cleave('#card',{
    blocks: [4, 4, 4, 4]
});

inputCard.addEventListener("input", () => {
    numberCard.innerText = inputCard.value;

    if (inputCard.value.length === 0) {
        numberCard.innerText = inputName.value;
    }
})
inputExpMM.addEventListener("input", () => {
    monthCard.innerText = inputExpMM.value;

    if (inputExpMM.value.length === 0) {
        monthCard.innerText = inputExpMM.value;
    }
})

inputExpYY.addEventListener("input", () => {
    yearCard.innerText = inputExpYY.value;

    if (inputExpYY.value.length === 0) {
        yearCard.innerText = inputExpYY.value;
    }
})

//Para que salte el label de error

document.addEventListener("DOMContentLoaded", function(event) { 
  
    document.getElementById('btn').addEventListener('click',
  confirmValidation)
  });

let inputOut;
let inputOutMM;
let inputOutYY;
let inputOutCvC;
// let inputForm;

function confirmValidation(event){
    event.preventDefault();
    inputOut=document.getElementById("card").value;
    inputOutMM=document.getElementById("expMM").value;
    inputOutYY=document.getElementById("expYY").value;
    inputOutCvC=document.getElementById("cvc").value;
    // inputForm=document.getElementsByClassName("container__pay");
   
    let error=false;
    
        if(inputOut.length===0){
            document.getElementById("labelout").style.display="block"; 
            document.getElementById("card").style.borderColor="red" ; 
            error=true;  
           
               
        }
        if(inputOutMM.length===0){
            document.getElementById("labeloutexp").style.display="block";
            document.getElementById("expMM").style.borderColor="red" ;
            error=true;  
            
        }
        if(inputOutYY.length===0){
            document.getElementById("labeloutexp").style.display="block";
            document.getElementById("expYY").style.borderColor="red" ;
            error=true;  
          
        }
        if(inputOutCvC.length===0){
            document.getElementById("labeloutcvc").style.display="block";
            document.getElementById("cvc").style.borderColor="red" ;
            error=true;    
           
        }
        if (error) {
            
            return;
            
        }

        document.getElementById("container__confirmation").style.display="block"; 
        document.getElementById("container__pay").style.display="none";  
       
 }



function resetValues(contentPay){
   
    //Resetea los valores del formulario
    contentPay.reset();
    //Oculta los label de los errores
    document.getElementById("labelout").style.display="none"; 
    document.getElementById("labeloutexp").style.display="none";
    document.getElementById("labeloutexp").style.display="none";
    document.getElementById("labeloutcvc").style.display="none";
    //Actualiza los valores de origen de la tarejta
    nameCard.innerHTML="0000 0000 0000 0000";
    numberCard.innerHTML="Jane Applessed";
    monthCard.innerHTML="00";
    yearCard.innerHTML="00";
    
    
}


function returnHome(){
    let contentPay=document.getElementById("container__pay");
    resetValues(contentPay);
    
    contentPay.style.display="flex";  
    document.getElementById("container__confirmation").style.display="none"; 
   
    
}


// BORRAR ERRORES
// Vaciar label al pinchar en el input
// Le doy parametro en la funcion y le paso valor en el html, en la funcion
function focusInput(labelID){
    document.getElementById(labelID).style.display="none";
}


