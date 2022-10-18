import "./Button.scss";

const Button = ((props) => {

    const { buttonText, buttonValue } = props;

    return(
        <button value={buttonValue}>{buttonText}</button>
    )
});


export default Button;