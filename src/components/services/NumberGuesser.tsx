import React from 'react';
// import './CardNew.css';


function NumberGuesser(){
    var inputTag = (document.getElementById("inputText") as HTMLInputElement);
    var inputValue = inputTag.value.toString();

    var inputNumber = (document.getElementById("inputNumber") as HTMLInputElement);
    var inputNumValue = Number(inputNumber.value);

    var divTag = (document.getElementById("novaMensagem") as HTMLDivElement);

    // console.log(inputValue, inputNumValue);

    if(inputValue === "" || inputNumValue === 0){
        alert("Por gentileza preencher todos os campos.");
        divTag.innerHTML = "";
    } else {
        divTag.innerHTML = `
            <div class = "novaClasse">
                <h1>
                    Seu nome é ${inputValue}
                </h1>

                <h2>
                    Sua idade é ${inputNumValue}
                </h2>
            </div>    
        `;
    }

    
}

export default NumberGuesser;