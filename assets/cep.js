const html = {
    get(element) {
        return document.querySelector(element);
    }
}
const cepDigitado = html.get("#inputCodigoPostal")
cepDigitado.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      html.get("#apiButton").click();
    }
});

async function getUser() {
    const campoEstado = html.get("#sub-div1-option");
    const campoCidade = html.get("#sub-div2-option");
    const campoLogradouro = html.get("#apiLogradouro");
    // const campoDdd = html.get("#inputDdd");
    const cepDigitado = html.get("#inputCodigoPostal");


    const response = await axios.get(`https://viacep.com.br/ws/${cepDigitado.value}/json/`);
    const estado = response.data.uf;
    const cidade = response.data.bairro;
    const logradouro = response.data.logradouro;
    // const ddd = response.data.ddd;
    



    campoEstado.innerHTML = `<option selected="">${estado}</option>`;
    campoCidade.innerHTML = `<option selected="">${cidade}</option>`;
    campoLogradouro.value = `${logradouro}` ;
    // campoDdd.value = `${ddd}`;
};