import React from "react"

const GalletaFortuna = ({FortunaData}) => {

    return(
        <div className="Galleta-Fortuna">
        <h1>Esta es tu Fortuna!</h1>
        <h2>
            <div className="paperCookie"><li>
            <i className="GALLETA"></i> 
            Fortuna: {FortunaData.phrase}</li>
            </div> 
            </h2>
            <h3> Autor: {FortunaData.author}</h3>
    

        </div>
    )
}

export default GalletaFortuna