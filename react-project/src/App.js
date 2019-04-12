import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';


class App extends Component{

    // these are the hooks
    // useState returns array with exactly two elements.
    // first element: the object itself and second element is
    // the function to render this state
    state = {
        persons:[
            {id:"dj", name:'dhruv', age:'30'},
            {id:"mn", name:'manu', age:'26'},
            {id:"ro", name:'roshni', age:'26'}
        ],
        otherState: 'some other value',
        showPersons: 'false'
    };


    dhruvBhonsleHandler = (newName) => {
        this.setState({
            persons:[
                {name: newName, age:'30'},
                {name: 'steph', age:'28'},
                {name: 'ruby', age:'34'}
            ]
        });
    };

    deletePersonHandler = (personIndex) => {

        /* to make code safe we added slice method because arrays are reference types
            and when you add slice with no arguments like below it copies the entire array instead of its original reference
            and assigns it to `const allPersons`
        */
        //const allPersons = this.state.persons.slice();

        // new alternative approach using spread operator to spread all elements of array into the list
        const allPersons = [...this.state.persons];
        allPersons.splice(personIndex,1);
        this.setState({persons: allPersons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    /* event.target.value -> this shows the value from event field */
    nameChangeHandler = (event,id) => {
        // findIndex is an inbuilt function that will be applied on every element of the array
        // it returns the index of the person whose `p.id isEqualto id`
        const personIndex = this.state.persons.findIndex(p => {
            return p.id===id;
        });
        // arrays are reference types and hence its not good idea to mutate them in this way
        // as we are changing the original object at the reference where this pointer points, hence good way is
        // shown below
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons:persons});
    }

    /*
  * you can even use different syntax to pass method so instead of
  * 'dhruvBhonsleHandler.bind(this,'bindunator!!!')' you can use
  * onClick ={() => dhruvBhonsleHandler.bind('bindunator!!!')}
  * bot syntaxes are same however its very difficult to maintain the code
  * whith the later syntax
  * */

    // you can also pass methods as props
    render(){
        // we can also use inline style like here to apply for buttons or page sections
        const style = {
            backgroundColor: 'blue',
            color:'white',
            font: 'inherit',
            border: '1px solid orange',
            padding: '8px',
            cursor: 'pointer',
            // ':hover': {
            //     backgroundColor: 'lightblue',
            //     color: 'black'
            // }
        };

        let persons = null;

        // if state.showPersons is true then proceed inside
        // dynamic adding the list of person by making use of vanilla javascript arrow function
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person,index) => {
                        return <Person
                            click = {() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event,person.id)}/>
                    })}
                </div>
            );
            style.backgroundColor='red';
            // style[':hover'] = {
            //     backgroundColor: 'lightgreen',
            //     color: 'black'
            // }
        }

        // let classes = ['red','bold'].join(' ');
        const classes = [];
        // if the array has items <= 2, paint them red
        if(this.state.persons.length<=2){
            classes.push('red'); // classes=['red']
        }
        if (this.state.persons.length<=1){
            classes.push('red','bold'); // classes=['red','green']
        }

        // jsx script return
        return (
        //    <StyleRoot>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p className={classes.join(' ')}> This is really working! </p>
                        <button style={style}
                                onClick={this.togglePersonsHandler}>Toggle Name</button>
                        <br/>
                        {persons}
                    </header>
                </div>
        //    </StyleRoot>
        );
    }
}

export default Radium(App);
