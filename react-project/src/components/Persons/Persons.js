import React,{Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {

    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // attention: here you have to return something,
        // nothing is not the option

        // normally here we have to compare the current props with the previous props and
        // return something

        // for our simplicity we leave this true or false
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
    }

    render() {
        return this.props.persons.map((person,index) => {
            return(<Person
                click = {() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event,person.id)}/>
            );
        });
    }
}

// using () instead of {} omits the use of return statement, especially if its the one-liner function
export default Persons;