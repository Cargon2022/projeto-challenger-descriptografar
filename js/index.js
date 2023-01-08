



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
  
    var  resultCripto = userText.replace
            (/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    
    document.getElementById ("not-concluded").style.display="none" ;
    setvisibilityConcluded (true)
    document.getElementById ("processedText").innerHTML = resultCripto;
    alert ("Seu texto foi criptografado");
}
    

    // Criar método de criptografia
    // Esconder "Nenhuma Mensagem encontrada"
    var textInput = document.querySelector("#user-text");
    var outInput = document.querySelector("#not-concluded");
   
    function descriptografar () {
        var  userText = document.getElementById("user-text").value;
      
        var  resultdesCripto = userText.replace
        (/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        document.getElementById ("not-concluded").style.display="none" ;
    setvisibilityConcluded (true)
        document.getElementById ("processedText").innerHTML = resultdesCripto;
        alert ("Seu texto foi descriptografado");
    }

    /* Faltam: 1 - criar botão de copiar e sua funcionalidades;    */
    
    function copiarTexto(){
        let textoCopiado = document.getElementById("processedText").innerHTML;
       
       navigator.clipboard.writeText(textoCopiado)
       
       alert("Texto copiado")
      
       // limpar
       document.getElementById("processedText").innerHTML = ""
       document.getElementById("user-text").value = ""
       
    
    }
     
    /*criar validação de input; */
   



window.onload= setvisibilityConcluded (false)