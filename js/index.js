



var isConcludedProcess = false
function setvisibilityConcluded(isVisible) {
    if(isVisible) {
        document.getElementById ("concluded").style.display="inline"
    }
    else
    document.getElementById ("concluded").style.display="none" 
    
}

var textInput = document.querySelector("#user-text");
var outInput = document.querySelector("#not-concluded");

function criptografar () {
    var  userText = document.getElementById("user-text").value;
    console.log (userText);
    var  resultCripto = userText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    console.log (resultCripto);
  
  
    

    // Criar método de criptografia
    // Esconder "Nenhuma Mensagem encontrada"
    
    document.getElementById ("not-concluded").style.display="none" ;
    setvisibilityConcluded (true)
    document.getElementById ("processedText").innerHTML = resultCripto;
    alert ("Seu texto foi criptografoado");
    /* Faltam: 1 - criar botão de copiar e sua funcionalidades;
    2 - criar função de criptografia;
    3 - criar função de descriptografia;
    4 - criar validação de input;
    5 - 
    */

}
function copiar () {
    
            
      }





function descriptografar () {
    console.log ("teste descriptografa")
}

window.onload= setvisibilityConcluded (false)