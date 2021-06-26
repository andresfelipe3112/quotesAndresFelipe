import React, { useState } from "react";
import quotes from "../quotes.json"

import ButtonTwiter from "./ButtonTwiter"


export default function QuoteBox(props) {

    //variables
    let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16); // Esta formula te permite obetener un color aleaatorio para usar en style
    let data = quotes["quotes"];// esta variable guarda el objeto de JSON para poder iterarlo a futuro.
    let randomNumber = Math.floor(Math.random() * ((data.length - 1) - 0) + 0); //usar esta formula para determinar un número aleatorio entre 0 hasta el total del Json a recorrer "Math.random() * (max - min) + min"


    //State

    const [quote, setQuote] = useState(data[randomNumber]); // El primer quote que se mostrara estará en el primer estado y este será aleatorio gracias al randomNumber



    //functions

    function buttonChange() {

        //usar esta formula para determinar un número aleatorio entre 0 hasta el total del Json a recorrer "Math.random() * (max - min) + min"
        randomNumber = Math.floor(Math.random() * ((data.length - 1) - 0) + 0)
        setQuote(data[randomNumber]) // actualizamos el valos del estado



    }



    return (
        <div className="container" style={{ backgroundColor: randomColor }}>


            <div className="quote">
                <h2 style={{ color: randomColor }} >{`" ${quote.quote} "`}</h2>
                <h3 style={{ color: randomColor }} >{`${quote.author}`}</h3>
                <div>
                    <span onClick={() => buttonChange()} style={{ backgroundColor: randomColor }}>New Quote</span>
                    <ButtonTwiter />
                </div>
            </div>



        </div>
    )
}