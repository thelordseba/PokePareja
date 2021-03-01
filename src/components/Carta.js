import React, { Component } from 'react';
import '../styles/Carta.css';
import FlipCard from 'react-card-flip';

export default class Carta extends Component{         
    render(){             
        return(
            <div className='carta' onClick = {this.props.seleccionarCarta}>                                          
                <FlipCard isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada}>
                    <div className='front'></div>
                    <div className='back'>
                    <img className='icono' src={this.props.icono}></img>                          
                    </div>
                </FlipCard>                
            </div>
        );
    }
}

