import React from 'react';
import classes from './Person.module.css'
import Radium from 'radium';

const person = (props) => {

    // this style component illustrates how we can make use of @media component using Radium feature
    // follow this implementation in App.js wherein we made use of <Styleroot> component
    // const style = {
    //   '@media(min-width: 500px)':{
    //       width: '450px'
    //   }
    // };
    //return( <div className="Person" style={style}>
    return( <div className={classes.Person}>
                 <p onClick={props.click}> My name is {props.name} and my age is {props.age} years old!</p>
                 <p> {props.children} </p>
                 <input type="text" onChange={props.changed} value={props.name}/>
            </div> )};
export default person;