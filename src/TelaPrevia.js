import React from 'react';

function TelaPrevia(props) {
    return (
        <h3 class="tela-previa">
            &nbsp; {props.contas.join(' ')}
        </h3>
    )
}

export default TelaPrevia;