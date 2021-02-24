import React, { Component } from 'react';
import './Carta.css';
import FlipCard from 'react-card-flip';
import imagen from './utils/Pokéball02.png'

export default class Carta extends Component{ 
        
    render(){             
        return(
            <div className='carta' onClick = {this.props.seleccionarCarta}>
                <FlipCard isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada}>
                    <div className='front'></div>
                    <div className='back'>
                    <img className='icono' src={this.props.icono}></img>    
                      {/* <i className={`fa ${this.props.icono} fa-5x`}></i> */}
                    </div>
                </FlipCard>                
            </div>
        );
    }
}