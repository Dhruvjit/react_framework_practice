import React, { useState } from 'react';
import logo from '../logo.svg';
import './App.css';
import Person from '../components/Persons/Person/Person';

const App = props => {

  // these are the hooks
  // useState returns array with exactly two elements.
  // first element: the object itself and second element is
  // the function to render this state
  const [personsState, setPersonState] = useState({
        persons:[
          {name:'dhruv', age:'30'},
          {name:'manu', age:'26'},
          {name:'roshni', age:'26'}
        ],
        otherState: 'some other value',
        showPersons: 'false'
  });

  // we can also use inline style like here to apply for buttons or page sections
  const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid orange',
      padding: '8px'
  };

  const dhruvBhonsleHandler = (newName) => {
    setPersonState({
      persons:[
          {name: newName, age:'30'},
          {name: 'steph', age:'28'},
          {name: 'ruby', age:'34'}
      ],
        // make sure you are manually adding the left property there from the usestate
        // in order to successfully change it
        otherState: personsState.otherState
    });
  };

  const togglePersonsHandler = () => {
      const doesShow = personsState.showPersons;
      setPersonState({
        showPersons: !doesShow
      });
  }

  const nameChangeHandler = (event) => {
      setPersonState({
          persons:[
              {name: 'maximus decimus', age:'30'},
              {name: event.target.value, age:'28'}
          ],
          // make sure you are manually adding the left property there from the usestate
          // in order to successfully change it
          otherState: personsState.otherState
      });
  }
    /*
  * you can even use different syntax to pass method so instead of
  * 'dhruvBhonsleHandler.bind(this,'bindunator!!!')' you can use
  * onClick ={() => dhruvBhonsleHandler.bind('bindunator!!!')}
  * bot syntaxes are same however its very difficult to maintain the code
  * whith the later syntax
  * */

  // you can also pass methods as props
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button style={style}
                onClick={togglePersonsHandler}>Switch Name</button>

          {personsState.showPersons ?
              <div>
                  <Person name={personsState.persons[0].name}
                          age={personsState.persons[0].age}
                          click={dhruvBhonsleHandler.bind(this,'dhruvinator!!!')} />

                  <Person name={personsState.persons[1].name}
                          age={personsState.persons[1].age}
                          changed={nameChangeHandler}>My Hobby is singing</Person>
              </div> : null
          }

          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
         </a>
      </header>
    </div>
  );
}

export default App;

// /* this is a class and it has its own property
//     It can only be defined in class...
// */
// // avoid using too many state because it creates program very difficult to read
// state = {
//   persons:[
//     {name:'dhruv', age:'30'},
//     {name:'manu', age:'26'},
//     {name:'roshni', age:'26'}
//   ],
//   otherState: 'some other value'
// }
//
// dhruvBhonsleHandler = () => {
//   // DONT DO THIS: React cannot recognize code like this -> this.state.persons[0].name = 'Bhonsle';
//   console.log('was clicked');
//   this.setState({ persons:[
//       {name:'bhonsle', age:'30'},
//       {name:'manu', age:'26'},
//       {name:'roshni', age:'26'}
//     ] })
// }
