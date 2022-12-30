



var isConcludedProcess = false
function setvisibilityConcluded(isVisible) {
    if(isVisible) {
        document.getElementById ("concluded").style.display="inline"
    }
    else
    document.getElementById ("concluded").style.display="none" 
    
}


function criptografar () {
    
    const userText = document.getElementById("user-text").value;

    // Criar método de criptografia
    // Esconder "Nenhuma Mensagem encontrada"
    
    document.getElementById ("not-concluded").style.display="none" ;
    setvisibilityConcluded (true)
    document.getElementById ("processedText").innerHTML = userText;
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