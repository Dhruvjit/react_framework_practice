import React from 'react';
import Person from "./Person/Person";

// using () instead of {} omits the use of return statement, especially if its the one-liner function
const persons = (props) => props.persons.map((person,index) => {
        return <Person
            click = {() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event,person.id)}/>
    });

export default persons;