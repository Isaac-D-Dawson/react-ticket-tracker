import SearchBox from "../SearchBox/SearchBox";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

const Header = (props) => {
    
    const { dropdownOptions } = props;
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (event) => {
        setSearchTerm(event.target.value.toLowerCase())
    }

    return (
        <div>
            <h1>TICKET TRACKER</h1>
            <div
            className="search__filters"
            >
                <SearchBox
                    label={"Employee Name: "}
                    searchTerm={searchTerm}
                    handleInput={handleInput}
                />
                <Dropdown
                    optionItems={dropdownOptions}
                    label={"Role: "}
                />
            </div>
        </div>
    )
}

export default Header;