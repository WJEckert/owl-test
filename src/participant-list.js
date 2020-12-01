import React from 'react';
import store from "./STORE.js";
import Participant from './participant.js';

function participantList(props) {
    
    return (
        <section className = 'list'>
            <div className = 'list-cycle'>
                {props.participants.map((participants) =>
                    <Participant
                    key={participants.id}
                    name={participants.name}
                    avatar={participants.avatar}
                    onStage = {participants.onStage}
                    inSession = {participants.inSession}
                    />
                )}
            </div>
        </section>
    );
}

export default participantList;