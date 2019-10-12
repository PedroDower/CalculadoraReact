import React, { Component } from 'react';

import Botao from './Botao.js';
import Tela from './Tela.js';
import TelaPrevia from './TelaPrevia.js';
import './style.css';

export default class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultado: 0,
            fila: [],
            aguardandoNumero: true
        }
    }

    clickBotao = (operacao) => {        
        switch(operacao) {
            case 'AC':
                this.setState({
                    resultado: 0,
                    fila: [],
                    aguardandoNumero: true
                });
            break;

            case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':                                    
                if (this.state.aguardandoNumero == true) {
                    this.setState({resultado: operacao});
                    
                    if (operacao != '0') { 
                        this.setState({aguardandoNumero: false});
                    }
                }
                else {
                    var numero = this.state.resultado.toString() + operacao;
                    this.setState({resultado: numero});
                }
            break;

            case '.':
                if(Number.isInteger(Number(this.state.resultado)) && !this.state.resultado.toString().includes('.')) {                                        
                    this.setState({
                        resultado: (this.state.resultado + '.'),
                        aguardandoNumero: false
                    });
                }
            break;

            case '*': case '/': case '-': case '+': case '%':                                
                this.state.fila.push(this.state.resultado);
                this.state.fila.push(operacao);
                
                this.setState({aguardandoNumero: true});
            break;

            case '±':
                this.setState({resultado: (this.state.resultado *= -1)});
            break;
                
            case '=':
                this.state.fila.push(this.state.resultado);                

                this.state.resultado = eval(this.state.fila.join(''));
                this.setState({
                    fila: [],
                    aguardandoNumero: true
                });
            break;
        }
    }    

    render() {
        return (
            <>
                <h1>Calculadora do Pedro</h1>
                <div class="container">
                    <TelaPrevia contas={this.state.fila} />
                    <Tela resultado={this.state.resultado} />
                    <Botao valor="AC" cor="cinza-claro" click={this.clickBotao}/>
                    <Botao valor="±" cor="cinza-claro" click={this.clickBotao} />
                    <Botao valor="%" cor="cinza-claro" click={this.clickBotao} />
                    <Botao valor="/" cor="amarelo" click={this.clickBotao} /><br></br>

                    <Botao valor="7" cor="cinza" click={this.clickBotao} />
                    <Botao valor="8" cor="cinza" click={this.clickBotao} />
                    <Botao valor="9" cor="cinza" click={this.clickBotao} />
                    <Botao valor="*" cor="amarelo" click={this.clickBotao} /><br></br>

                    <Botao valor="4" cor="cinza" click={this.clickBotao} />
                    <Botao valor="5" cor="cinza" click={this.clickBotao} />
                    <Botao valor="6" cor="cinza" click={this.clickBotao} />
                    <Botao valor="-" cor="amarelo" click={this.clickBotao} /><br></br>

                    <Botao valor="1" cor="cinza" click={this.clickBotao} />
                    <Botao valor="2" cor="cinza" click={this.clickBotao} />
                    <Botao valor="3" cor="cinza" click={this.clickBotao} />
                    <Botao valor="+" cor="amarelo" click={this.clickBotao} /><br></br>

                    <Botao valor="0" cor="cinza" click={this.clickBotao} />
                    <Botao valor="." cor="cinza" click={this.clickBotao} />
                    <Botao valor="=" cor="amarelo" click={this.clickBotao} />
                </div>               
            </>
        )
    }
}