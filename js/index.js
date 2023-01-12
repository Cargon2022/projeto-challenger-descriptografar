



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

    function validateText  () {
        var  userText = document.getElementById("user-text").value;
        // 1 - Deve funcionar apenas com letras minúsculas 
            if(containsUppercase (userText)) {
                alert ("Atenção: não pode conter letra maiuscula.");

            }
        if (validateCaracterEspeciais (userText)) {
            alert ("Atenção: não sáo permitidos caracteres especiais.");
        }
        
    }
    // Verifica se a string possui letra maiuscula


    function containsUppercase(str) {
        return /[A-Z]/.test(str);
    }
    // 2 - Não devem ser utilizados letras com acentos nem caracteres especiais
    function validateCaracterEspeciais (str) {
        return /[`´!@#$%^&*\(\)_\+\-\=\[\]\{\};':"|,.<>/?~áéíóúãõ]/.test(str)

    }


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
        
        /*criar validação de input; usar pattern? */ 
    



    window.onload= setvisibilityConcluded (false)