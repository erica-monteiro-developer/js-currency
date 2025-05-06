let dolar = 5.1;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup",() => {
    convert("usd-to-brl");
});

brlInput.addEventListener("keyup",() => {
    // brlInput.value = formatCurrency(brlInput.value);
    convert("brl-to-usd");
});

// evento de estar com o campo ativo -> focus
// evento de sair do campo -> blur
usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value);
});

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value);
});

usdInput.value = "1000,00";
convert("usd-to-brl");

function formatCurrency(value){
    let fixedValue = fixValue(value);
    // utilizar função formatar
    let options = {
        // a função não vai colocar ponto na 
        // centena, no milhar...
        useGrouping: false,
        minimumFractionDigits: 2,
    };

    // Intl -> biblioteca de internacionalização
    let formatter = new Intl.NumberFormat("pt-BR", options)

    return formatter.format(fixedValue);
}

function fixValue(value){
    let fixedValue = value.replace(",",".");

    let floatValue = parseFloat(fixedValue);

    if(isNaN(floatValue)){
        floatValue = 0;
    };

    return floatValue;
}

function convert(type){
    if((type == "usd-to-brl")){
        let fixedValue = fixValue(usdInput.value);

        let result = fixedValue * dolar;
        result = result.toFixed(2);

        brlInput.value = formatCurrency(result);

    }
    if((type == "brl-to-usd")){
        let fixedValue = fixValue(brlInput.value);

        let result = fixedValue / dolar;
        result = result.toFixed(2);

        usdInput.value = formatCurrency(result);
    }
}

