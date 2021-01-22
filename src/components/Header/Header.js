import React, {useState} from 'react';
import './Header.css';
import { useHistory, Link } from "react-router-dom";

const Header = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();

    const handleOnSubmit = (e) => {
        e.preventDefault();     
           

        if(searchValue){
            history.push(`/search/${searchValue}`);
            setSearchValue('');
        }

    }

    const handleOnChange =(e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className="container-header">
            <Link  to="/" className="logo">
                <h1>MovieKu</h1>
            </Link>
            <form onSubmit={handleOnSubmit} className="container-search">
                <input 
                    className="search" 
                    type="text" 
                    placeholder="Search..." 
                    value={searchValue}
                    onChange={handleOnChange}
                />
            </form>
        </div>
    )
}

export default Header;