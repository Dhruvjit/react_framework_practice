import React, {Component} from 'react';
import classes from './Person.module.css'
//import Radium from 'radium';

class Person extends Component{

    render() {

        return( <div className={classes.Person}>
            <p onClick={this.props.click}> My name is {this.props.name} and my age is {this.props.age} years old!</p>
            <p> {this.props.children} </p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    };
}
    // this style component illustrates how we can make use of @media component using Radium feature
    // follow this implementation in App.js wherein we made use of <Styleroot> component
    // const style = {
    //   '@media(min-width: 500px)':{
    //       width: '450px'
    //   }
    // };
    //return( <div className="Person" style={style}>

export default Person;