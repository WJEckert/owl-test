import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './participant-list.js';

it('renders without crashing', () => {
    const div = document.createElement('section');
    ReactDOM.render(<ParticipantList participants =
         {[{id : 1, inSession : true, onStage : true, avatar : 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1', name : 'Will'}]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
  it('renders the UI as expected', () => {
    const tree = renderer
    .create(<ParticipantList participants =
        {[{id : 1, inSession : true, onStage : true, avatar : 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1', name : 'Will'}]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });