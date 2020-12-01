import Participant from './participant.js';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import store from './STORE.js'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant session = {store.session} stage = {store.onStage} avatar = {store.avatar} name = {store.name}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
it('renders the UI as expected', () => {
    const tree = renderer
    .create(<Participant inSession = {true} onStage = {true} avatar = 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1' name = 'Will'/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
    
