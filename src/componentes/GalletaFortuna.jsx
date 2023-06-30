import React from "react"

const GalletaFortuna = ({FortunaData}) => {

    return(
        <div className="Galleta-Fortuna">
        <h1>Esta es tu fortuna!</h1>
        <h2> <li>
            <i className="GALLETA"> </i> 
            fortuna:{FortunaData.phrase}</li>
            </h2>
            <h3> Autor: {FortunaData.author}</h3>
    

        </div>
    )
}

export default GalletaFortuna