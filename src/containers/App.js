import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
    
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
    
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }

  state = {
    persons: [
      {id: 'andla', name: 'Femi', age: 26},
      {id: 'mcrosft', name: 'Clark', age: 31},
      {id: 'appl', name: 'Lois', age: 29},
    ],
    anotherState: 'Ondo',
    showPersons: false,
    toggleClicked: 0,
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    })

    const person = { ...this.state.persons[personIndex] }

    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    // const doesShow = this.state.showPersons;
      this.setState( (prevState, props) => {
        return {
          showPersons: !prevState.showPersons,
          toggleClicked: prevState.toggleClicked + 1,
        }
      })
   }

   deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); OR...
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    return this.setState({persons,});
   }

   showAllPersons = () => {
     this.setState({ showPersons: true});
   }

  render() {
    console.log('[App.js] Inside render()');
    
    let persons = null;

    if (this.state.showPersons ) {
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          change={this.nameChangeHandler}
          />
        </div> 
      )
    }

    return (
      <Aux>
        <Cockpit
        appTitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        toggle={this.togglePersonsHandler}
        show={this.showAllPersons}/>
        { persons }
      </Aux>
     );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
};

export default withClass(App, classes.App);
