import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux'

const cockpit = (props) => {

  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  let assignedClasses = [];

    if (props.persons.length <= 2) {
      assignedClasses = [...assignedClasses, classes.red];
    } if (props.persons.length <= 1) {
      assignedClasses = [...assignedClasses, classes.bold];
    }

  return (
  <Aux>
    <button onClick={props.show}>Show Persons</button>
    <h1>{props.appTitle}</h1>
    <p className={assignedClasses.join(' ')}>This is awesome!!!</p>
    <button className={btnClass} onClick={props.toggle}>
      Toggle Persons
    </button>
  </Aux>
  )
}

export default cockpit;
