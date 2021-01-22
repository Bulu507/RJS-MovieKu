import React, {useState} from 'react';
import './Header.css';
import { useHistory, Link } from "react-router-dom";
import { YearPicker } from 'react-dropdown-date';

const Header = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const [yearValue, setYearValue] = useState('');
    const history = useHistory();

    const handleOnSubmit = (e) => {
        e.preventDefault();     
           

        if(searchValue){
            if(yearValue){
                history.push(`/search/${searchValue}&year=${yearValue}`);
            }else{
                history.push(`/search/${searchValue}`);
            }
            setSearchValue('');
            setYearValue('');
        }

    }

    const handleOnChange =(e) => {
        setSearchValue(e.target.value);
    }

    const date = new Date(props.release_date);
    const currentYear = date.getFullYear();

    return (
        <div className="container-header">
            <Link  to="/" className="logo">
                <h1>MovieKu</h1>
            </Link>
            <div className="searching">
                    <YearPicker
                        defaultValue={'select year'}
                        end={currentYear}                  // default is current year
                        reverse                     // default is ASCENDING
                        required={true}             // default is false
                        value={yearValue}     // mandatory
                        onChange={(year) => {       // mandatory
                            setYearValue(year);
                            console.log(year);
                        }}
                        id={'year'}
                        name={'year'}
                        classes={'classes'}
                        optionClasses={'option classes'}
                    />
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
        </div>
    )
}

export default Header;