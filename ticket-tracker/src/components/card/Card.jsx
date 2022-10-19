import "./Card.scss";
import Button from "../button/Button";
import { useState } from "react";

const Card = (props) => {

    const { displayValue, cardName, cardJob } = props;
    const [ counter, setCounter] = useState(displayValue/1);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSub = () => {
        if (counter > 0 ) {
            setCounter(counter - 1);
        }
    }

    return(
        <div className="card">
            <h1 className="card__name">
                {cardName}
            </h1>
            <h2 className="card__title">
                ({cardJob})
            </h2>
            <div
                className="button-wrapper__add"
                onClick={handleAdd}
            >
                <Button buttonText = {"+"} buttonValue="add"/>
            </div>
            <h3
                className="card__value"
            >
                {counter}
            </h3>
            <div
                className="button-wrapper__sub"
                onClick={handleSub}
            >
                <Button buttonText = {"-"} buttonValue="sub"/>
            </div>
        </div>
    );
};

export default Card;