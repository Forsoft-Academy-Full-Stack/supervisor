// desabilitar select 
var input = document.querySelector("#estado");
var input2 = document.querySelector("#cidade");
var input3 = document.querySelector("#tipo-logrd");
var input4 = document.querySelector("#locacao");
var input5 = document.querySelector("#natureza");
input.disabled = true
input2.disabled = true
input3.disabled = true
input4.disabled = true
input5.disabled = true

// required js

function tratarCampos() {
    let avancar = true;
    let campos = ["idunidade"];

    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value=='') {
            avancar = false;
            alert("O Campo ID Unidade deve ser preenchido!")
        }
    }
    
    if(avancar) {
        alert("Funcionou")
    }

    event.preventDefault()
}

