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
        setCounter(counter - 1);
    }

    return(
        <div className="card">
            <h1 className="card__name">
                {cardName}
            </h1>
            <p className="card__title">
                ({cardJob})
            </p>
            <div
                className="button-wrapper__add"
                onClick={handleAdd}
            >
                <Button buttonText = {"+"} buttonValue="add"/>
            </div>
            <p className="card__value">{counter}</p>
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