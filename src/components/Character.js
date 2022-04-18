import React, { Component } from "react";
import './Character.css'

class Character extends Component {
    render() {
        return <div className='box'>
            <div className='text-box-container'>
                <div className='text-box'><u>ID:</u> {this.props.character.id}</div>
                <div className='text-box'><u>Name:</u> {this.props.character.name}</div>
                <div className='text-box'><u>Status:</u> {this.props.character.status}</div>
                <div className='text-box'><u>Specie:</u> {this.props.character.species}</div>
                <div className='text-box'><u>Type:</u> {this.props.character.type}</div>
                <div className='text-box'><u>Gender:</u> {this.props.character.gender}</div>
            </div>
            <img className='img-box' src={this.props.character.image}/>
        </div>
    }
}

export default Character;