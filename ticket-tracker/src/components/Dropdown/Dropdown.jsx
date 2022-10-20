
const Dropdown = (props) => {
    const { optionItems, label } = props;

    return (
        <div>
            <label
                for="role__select"
            >
                {label}
            </label>
            <select
            className="role__select"
            >
                {optionItems.map((item) => {
                    return (<option key={item}>{item}</option>)
                })}
            </select>
        </div>
    )
}

export default Dropdown;