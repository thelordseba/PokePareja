import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Tablero from './components/Tablero';
import construirBaraja from './utils/construirBaraja';
import UIfx from "uifx";
import yes from './sounds/coinsidencias.mp3';
import victoria from './sounds/victoria.mp3';
import ohno from './sounds/OHNO.mp3';
import swal2 from 'sweetalert2';
import bola2 from './images/BOLAR.png';
import logo from './images/logo2.png'
import Footer from './components/Footer';


const getEstadoInicial = ()=>{
  const baraja = construirBaraja();
  return {
    baraja: baraja,
    parejaSeleccionada: [],                                              
    estaComparando: false,
    numeroDeIntentos: 0
  }
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = getEstadoInicial();
  }
  render(){
    return (
      <div className="App">        
        <Header 
           intentos={this.state.numeroDeIntentos}
           reiniciarJuego={()=> this.resetearJuego()}
           />
        <Tablero 
           baraja = {this.state.baraja} 
           parejaSeleccionada = {this.state.parejaSeleccionada}
           seleccionarCarta = {(carta)=> this.seleccionarCarta(carta)}                                 //Paso al tablero por props el método seleccionarCarta 
           />  
        {/* <Footer/>          */}
      </div>
    );
  }

  seleccionarCarta(carta){
    if(this.state.estaComparando ||                                                        //Condiciones en las que el usuario no deberia seleccionar una carta
       this.state.parejaSeleccionada.indexOf(carta) > -1 || 
       carta.fueAdivinada){  
         return;
    }
    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta]; 
    this.setState({parejaSeleccionada});                                                    //Actualizo el estado

    if(parejaSeleccionada.length === 2){
      this.compararParejas(parejaSeleccionada);
    }
  }

  compararParejas(pareja){    
    this.setState({estaComparando: true});

    const [primeraCarta, segundaCarta] = pareja; 

    //Reproduce sonido de coinsidencia      
    // if(primeraCarta.icono === segundaCarta.icono){
    //   const yesSound = new UIfx(yes);
    //   yesSound.play(0.5);
    // } else{
    //   const wrong = new UIfx(ohno);
    //   wrong.play(0.5);
    // }                                     

    setTimeout(()=>{
      let baraja = this.state.baraja;

      if(primeraCarta.icono === segundaCarta.icono){   
        baraja = baraja.map((carta)=>{          
          if(carta.icono !== primeraCarta.icono){
            return carta;
          }else{
            return {...carta, fueAdivinada: true};
          }
        });
      }

      this.setState({
        baraja: baraja,
        parejaSeleccionada: [],
        estaComparando: false,
        numeroDeIntentos: this.state.numeroDeIntentos + 1        
      });

      this.verificarGanador(baraja);

    }, 1000);

  }

  verificarGanador(baraja){
    const cartasNoAdivinadas = baraja.filter((carta)=> !carta.fueAdivinada)
    if(cartasNoAdivinadas.length === 0){

      const victoriaSound = new UIfx(victoria);
      victoriaSound.play();

      swal2.fire({ 
        title: `<font color="#FFFFFF" size="7">Ganaste el juego en ${this.state.numeroDeIntentos} intentos.</font>`,  
        imageUrl: logo,
        imageWidth: 400,
        imageHeight: 146,
        imageAlt: 'Custom image',
        confirmButtonText: 'Reiniciar juego',
        confirmButtonColor: '#EA0012',
        background: ` url(${bola2})`
      })
      .then(()=>{
        this.resetearJuego();
      });      
    }
  }

  resetearJuego(){    
   this.setState(getEstadoInicial()); 
  };
  
}

export default App;

