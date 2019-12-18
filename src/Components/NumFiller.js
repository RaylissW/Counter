import React from 'react';

export default function NumFiller(props) {
    return (
        <input type="number"
               min={0}
              // pattern="[0-9]*"
               value ={props.stateValue}
               onChange={props.handleInputChange}>
        </input>
    );
}