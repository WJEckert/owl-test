import React from 'react';
import Participant from './participant.js';
import store from './STORE.js'

function participantList() {
    
    return (
        <section className = 'list'>
            <div className = 'list-cycle'>
                {store.map((participants) =>
                    <Participant
                    key={participants.id}
                    name={participants.name}
                    avatar={participants.avatar}
                    onStage = {participants.onStage}
                    inSession = {participants.inSession}
                    />
                ).sort(function (participant){
                    if (participant.props.inSession === false){
                        console.log('1')
                        return 1;
                    }
                    else {
                        console.log(participant)
                        console.log('-1')
                        return -1;
                    }}
                )}
            </div>
        </section>
    );
}

export default participantList;