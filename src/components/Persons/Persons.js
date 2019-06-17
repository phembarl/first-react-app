import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
    
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
    
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()'); 
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons || nextProps.change !== this.props.change ||
  //   nextProps.click !== this.props.click;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate()');
  }

  render() {
    console.log('[Persons.js] Inside render()');

    return this.props.persons.map((person, index) => {
      return <Person
      click={() => this.props.click(index)}
      position={index}
      key={person.id}
      name={person.name}
      age={person.age}
      change={(event) => this.props.change(event, person.id)}/>
    });
  }
}

  export default Persons;
