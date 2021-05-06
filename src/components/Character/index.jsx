import { Component } from "react";
import './style.css';

class Character extends Component {
    render() {
        const { name, image, species } = this.props.char;
        return(
            <div className="char">
                <img className='img' src={image} alt={name}></img>
                <label className='info'>{name}</label>
                <label className='info'>{species}</label>                
            </div>
        )
    }
}

export default Character;