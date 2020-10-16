import React from 'react'
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'

//CONTADOR = CRONOMETRO
class Contador extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            segundos: 0,
            minutos: 0, 
            horas: 0,
            stop: false,
            nameStop: "Stop",
            parcial: ""
        }
    }



    incrementar(){
        this.setState(
            
                (state) => {
                    if(this.state.stop==false){
                        if (state.segundos >= 60){
                            this.zerar();
                            this.incrementarMinutos()
                        }

                        if (state.minutos === 60){
                            this.incrementarHoras()
                            this.zerar();
                        }

                        return({segundos: state.segundos +1})
                }
            }
        )
    }

    zerar(){
        this.setState({segundos: 0})
        this.setState({minutos: 0})
    }

    incrementarMinutos(){
        this.setState ({minutos: this.state.minutos + 1})
    }

    incrementarHoras(){
        this.setState ({horas: this.state.horas + 1})
    }

    zerarCronometro(){
        this.setState({
            segundos: 0,
            minutos: 0,
            horas: 0
        })
    }
    
    pararTempo(){
        this.setState({
            stop: !this.state.stop
        })
        if(this.state.stop)
        {this.setState({
            nameStop: "Stop"
        })}
        else
            {this.setState({
                nameStop: "Play"
            })} 
    }
    
    // Parcias do Cronometro
    parciais(){
        let p = this.state.horas + ":" + this.state.minutos + ":" + this.state.segundos
        this.setState({
            parcial: this.state.parcial + " -> " + p
        })
    }
           

    componentDidMount(){
        this.timer = setInterval( () => this.incrementar(), 1000)
    }


    // Renderizando 
    render(){
        return(
            <div>

            <h1>{this.state.horas}:{this.state.minutos}:{this.state.segundos}</h1>
            <Botao onClick={() => {this.zerarCronometro()}} label="Zerar" />
            <Botao onClick={() => {this.pararTempo()}} label={this.state.nameStop} />
            <Botao onClick={() => {this.parciais()}} label="Parcial" />
            <LabelCronometro name={this.state.parcial}/>
            
            </div>

        )
    }
}

export default Contador;