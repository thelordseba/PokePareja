import React, { Component } from 'react';
import './Carta.css';
import FlipCard from 'react-card-flip';
import imagen from './utils/Pokebolal.png'

export default class Carta extends Component{ 
        
    render(){             
        return(
            <div className='carta' onClick = {this.props.seleccionarCarta}>
                <FlipCard isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada}>
                    <div className='front'><img src={imagen} width='125px'/></div>
                    <div className='back'>
                    <img className='icono' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg'></img>    
                      {/* <i className={`fa ${this.props.icono} fa-5x`}></i> */}
                    </div>
                </FlipCard>                
            </div>
        );
    }
}