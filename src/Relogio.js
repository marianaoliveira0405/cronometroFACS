import React from 'react'
import './App.css';
import LabelRelogio from './LabelRelogio';
import LabelRelogio1 from './LabelRelogio1';




class Relogio extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        segundos : 0,
        minutos : 0,
        horas: 0,
        relogio: ""
    }
}

relogio(){
    var moment = require('moment-timezone')
    let localTime = moment( ).tz("America/Bahia").format("HH:mm:ss").toString()
        let localTime2 = moment( ).tz("America/Vancouver").format("HH:mm:ss").toString()
        let localTime3 = moment( ).tz("Pacific/Efate").format("HH:mm:ss").toString()
        let localTime4 = moment( ).tz("Africa/Lagos").format("HH:mm:ss").toString()
        let localTime5 = moment( ).tz("Europe/Helsinki").format("HH:mm:ss").toString()
    this.setState({
        relogio: localTime,
            relogio2: localTime2,
                relogio3: localTime3,
                    relogio4: localTime4,
                        relogio5:localTime5
    
    
    
    })
}

componentDidMount(){
    this.timer2 =  setInterval( () => this.relogio(), 1000)
}

 render(){
    return(
        <div>
            <h1>Horário: America/Bahia</h1>
            <LabelRelogio1 name={this.state.relogio}/>
            <h1>Horário: America/Vancouver</h1>
            <LabelRelogio1 name={this.state.relogio2}/>
            <h1>Horário: Oceano Pacifico/Efate</h1>
            <LabelRelogio1 name={this.state.relogio3}/>
            <h1>Horário: Africa/Lagos</h1>
            <LabelRelogio1 name={this.state.relogio4}/>
            <h1>Horário: Europa/Helsinki</h1>
            <LabelRelogio1 name={this.state.relogio5}/>
            </div>
    )
    }   
}

export default Relogio;

