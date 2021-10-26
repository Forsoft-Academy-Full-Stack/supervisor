window.onload = function() {
    document.getElementById('form-cad-portador').onsubmit = tratarCampos;
}

function tratarCampos() {
    let erro = false;
    let campos = ["name","surname","identity","date-birth","country","postal-code","sub-div1","sub-div2","tipo-logrd","logrd","ddi-telf","telf"]

        for (x=0;x<campos.length;x++) {
            if (document.getElementById(campos[x]).value == '') {
                erro = true;
            }
        }

        if (erro) {
            alert('Todos os campos devem ser preenchidos!');
        } else {
            alert('Cadastro realizado com sucesso!');
        }

        return !erro;
}