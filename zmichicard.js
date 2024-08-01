function generateRandomCard() {
    // declaracion de arrays con los valores de las cartas
    const valor = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
    const symbol = ['&hearts;', '&diams;', '&clubs;', '&spades;'];

    //funcion que genera el valor y el simbolo aleatorio
    const randomValor = valor[Math.floor(Math.random() * valor.length)];
    const randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];

    //declaracion de constantes para guardar el valor de la funcion por medio del ID 
    //si declarase esto como se muestra con los comentarios de la linea 12, 13 y 14, el condicional de abajo no recocnoce el color.
    const symbolTop = document.getElementById('symbolTop')                                //.innerHTML = randomSymbol;
    const cardValue = document.getElementById('value')                                   //.innerHTML = randomValor;
    const symbolDown = document.getElementById('symbolDown')                            //.innerHTML = randomSymbol;

    //en cambio si lo declaro así, el condicional si me reconoce el color
    symbolTop.innerHTML = randomSymbol;
    cardValue.innerHTML = randomValor;
    symbolDown.innerHTML = randomSymbol;

    if (randomSymbol === '&hearts;' || randomSymbol === '&diams;') {
        symbolTop.style.color = 'red';
        cardValue.style.color = 'red'
        symbolDown.style.color = 'red'
    }
    else {
        symbolTop.style.color = 'black';
        cardValue.style.color = 'black'
        symbolDown.style.color = 'black'
    }
};

window.onload = generateRandomCard()
setInterval(generateRandomCard, 10000);
