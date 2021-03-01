import shuffle from 'lodash.shuffle';                                                  
const NUMERO_DE_CARTAS = 20;

export default ()=>{                                  
    
    let cartas = [];   

    while(cartas.length < NUMERO_DE_CARTAS){
    const indice = Math.floor(Math.random() * 648);       
   
    const icono = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${indice}.svg`;
    const carta = {
        icono : icono,                           
        fueAdivinada : false
    };

    cartas.push(carta);
    cartas.push({...carta});                                                       
    }

    let baraja = shuffle(cartas);

    return shuffle(baraja);                                                            
};