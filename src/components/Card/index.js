//Contruir um card que recebe imagem , titulo e ação
import React from "react";


function Card(props) {
    return(
        <div >
            <img src={props.foto} alt="corpo"/>     
        </div>     
    );
};
export default Card;