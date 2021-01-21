import React from 'react';
import './Header.css';

const Header = (props) => {
    
    return (
        <div className="container-header">
            <h1>{props.heading}</h1>
            <form onSubmit={props.onSubmit} className="container-search">
                <input 
                    className="search" 
                    type="text" 
                    placeholder="Search..." 
                    value={props.value}
                    onChange={props.onChange}
                />
            </form>
        </div>
    )
}

export default Header;