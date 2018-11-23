import React from 'react';

const Header = ({ onGridChange, isGrid }) => {
    const icon = isGrid ? <i className="material-icons">list</i> : <i className="material-icons">view_module</i>
    return (
        <nav>
            <div className="nav-wrapper">
                <ul className="right hide-on-med-and-down">
                    <li onClick={onGridChange}>{icon}</li>
                    <li><i className="material-icons">refresh</i></li>
                </ul>
            </div>
        </nav>
    )
}



export { Header }