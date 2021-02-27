import React, {Component} from 'react';
import './Footer.css';
import gh from './utils/GH.png';
import ld from './utils/LD.png';

class Footer extends Component{
    render(){
        return(
            <div className='footer'>
                
                <a href='https://github.com/thelordseba' 
                   target='_blank'>
                       <img className='imageGh' src={gh}/>
                </a>
                
                <a href= 'https://www.linkedin.com/in/truisi-sebastian/' 
                   target='_blank'>
                       <img className='imgLD' src={ld}/>
                </a>

            </div>
        );
    }
}

export default Footer;