import "./Card.scss";
import Button from "../button/Button";  

const Card = (props) => {

    const { displayValue, cardName, cardJob } = props;

    return(
        <div className="card">
            <h1 className="card__header">
                {cardName}({cardJob})
            </h1>
            <Button buttonText = {"+"} buttonValue="add"/>
            <p className="card_value">{displayValue}</p>
            <Button buttonText = {"-"} buttonValue="sub"/>
        </div>
    );
};

export default Card;