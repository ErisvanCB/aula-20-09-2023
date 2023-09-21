import React from 'react';
import './CardNew.css';
import NumberGuesser from '../services/NumberGuesser';

function CardNew(){
    return(
        <div className="numberDivTop">
            <input type="text" id="inputText" placeholder="Digite seu nome:"/>
            <input type="number" id="inputNumber" placeholder="Digite sua idade:"/>
            <button onClick={NumberGuesser}>Enviar</button>

            <div id="novaMensagem">

            </div>
        </div>
    )
     
}





export default CardNew;