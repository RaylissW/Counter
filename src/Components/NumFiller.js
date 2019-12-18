import React from 'react';

export default function NumFiller(props) {
    return (
        (props.error) ?
    <input
          className={"Err"}
          type="number"
           min={0}
           value={props.stateValue}
           onChange={props.handleInputChange}>
    </input>:
    <input type="number"
           min={0}
           value={props.stateValue}
           onChange={props.handleInputChange}>
     </input>
    );
}