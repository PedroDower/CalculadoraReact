import React from 'react';

function Botao(props) {
    return (
        <button className={"btn-" + props.cor + "-" + props.valor} onClick={ () => props.click(props.valor) }>
            {props.valor}
        </button>
    );
}

export default Botao;