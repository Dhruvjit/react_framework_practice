import React, {useEffect} from 'react';
import logo from "../../logo.svg";
import classes from "./Cockpit.module.css";

// follow the best practice of using as many components as possible
const cockpit = (props) => {

    // this is the lifecycle hook alternative of class components for functional component
    // there can be multiple useEffect functions
    useEffect(()=>{
       console.log('[cockpit.js] useEffect');
       // you can even send http request here
        setTimeout(()=>{
            alert('Saved data to cloud!');
        }, 1000);
        return()=>{console.log('[Cockpit.js] cleanup work in useeffect!')}
    }, [props.persons]);

    /*
    * with the code classes.red and such, app.module.css is only scoped to be used in this component
    * */

    // let classes = ['red','bold'].join(' ');
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass=classes.red;
    }

    // if the array has items <= 2, paint them red
    if(props.persons.length<=2){
        // this `classes.red` is e.g. of using css module
        assignedClasses.push(classes.red); // classes=['red']
    }
    if (props.persons.length<=1){
        assignedClasses.push(classes.bold); // classes=['red','green']
    }

    return (
      <div className={classes.Cockpit}>
          <h1 className={classes.greenyellow}>{props.title}</h1>
          <img src={logo} className={classes["App-logo"]} alt="logo" />
          <p className={assignedClasses.join(' ')}> This is really working! </p>
          <button className={btnClass}
            onClick={props.clicked}>Toggle Name</button>
      </div>
    );
};

// export the variable in `const cockpit` above
export default cockpit;