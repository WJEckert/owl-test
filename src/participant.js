import React from 'react';
//import store from "./STORE.js"

function participant(props){
    if (props.inSession === true){
        if (props.onStage === true){
            return (
                <div className='participant'>
                    <div className = 'image'>
                        <img className = "participant-image" src = {props.avatar} alt = "Picture of person"/>
                    </div>
                    <div className='info'>
                        <h2>{props.name}</h2>
                        <ul className = 'listOn'> 
                            <li> on stage</li>
                        </ul>
                    </div>
                    
                </div>
            );
        } 
        else {
            return (
                <div className='participant'>
                    <div className = 'image'>
                        <img className = "participant-image" src = {props.avatar} alt = "Picture of person"/>
                    </div>
                    <div className='info'>
                        <h2>{props.name}</h2>
                        <ul className = 'listOn'> 
                            <li> in session</li>
                        </ul>
                    </div>
                    
                </div>
            );
        }
    }
    else {
        return (
            <div className='participant'>
                <div className = 'image'>
                    <img className = "participant-image" src = {props.avatar} alt = "Picture of person"/>
                </div>
                <div className='info'>
                    <h2>{props.name}</h2>
                    <ul className = 'listOff'> 
                        <li> left session</li>
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default participant;