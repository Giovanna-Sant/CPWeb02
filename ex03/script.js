const inputCor = document.getElementById("userColor")
const outputLista = document.getElementById("listaCores")

const coresPadrao = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    yellow: "#FFFF00",
    black: "#000000",
    white: "#FFFFFF",
    purple: "#800080",
    orange: "#FFA500",
    pink: "#FFC0CB",
    gray: "#808080",
    brown: "#A52A2A",
    cyan: "#00FFFF",
    magenta: "#FF00FF"
};


//pegar input do usuário e adicionar item na lista
inputCor.addEventListener('keypress', (event) => {
    if (event.key === "Enter"){
        const corFormat = inputCor.value.toLowerCase().trim()

        if (corFormat == ""){
            alert("Invalid color. Try again.")
        } else {
            const novaCor = document.createElement("li")
            novaCor.textContent = corFormat
            outputLista.appendChild(novaCor)

            //mudar fundo conforme correnpondencia a lista
            if (coresPadrao.hasOwnProperty(corFormat)) {
                novaCor.style.backgroundColor = coresPadrao[corFormat];
                if (corFormat === "black"){
                    novaCor.style.color = "#fff"
                }
            } else { //cor de fundo padrao e add a lista de cores padrao
                novaCor.style.backgroundColor = "#e3e3e3"; 
                coresPadrao[corFormat] = ""; 
            }

            console.log(coresPadrao)
            inputCor.value = ""
        }
    }
})