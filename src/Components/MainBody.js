import React from 'react';
import NumFiller from "./NumFiller";

export default function MainBody(props) {
    let stateValue=props.stateValue;
    return (
        <div className={"appscreen"}>
            <header> ЧИСЛОСЧЕТЧИК</header>
            <div className={"container"}>
                {(0<props.stateValue)?
                    <button className={"decrementButton"} onClick={props.decrement}>
                        "Вычесть"
                    </button> :
                    <button disabled className={"decrementButton"} onClick={props.decrement}>
                        "Вычесть"
                    </button>
                }
                <form className={"numFiller"}>
                  <NumFiller handleInputChange={props.handleInputChange} stateValue={props.stateValue}/>
                </form>
                <button className={"incrementButton"}>
                    "Прибавить"
                </button>
            </div>
        </div>
    );
}