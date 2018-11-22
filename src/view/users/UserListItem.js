import React from 'react';
import PropTypes from 'prop-types'

const UserListItem = ({ userPicture, userName, userEmail , userAge }) => {
    return (


        <ul className="collection">
        <li className="collection-item avatar">
          <img src={userPicture} alt="" className="circle"/>
            <p><span>Name: </span>{userName}</p>
            <p><span>E-mail: </span>{userEmail}</p>
            <p><span>Age: </span>{userAge}</p>
        </li>
        </ul>

    )
}

UserListItem.propTypes = {
    userName: PropTypes.string,
    userPicture: PropTypes.string,
    userEmail: PropTypes.string,
    userAge: PropTypes.number
}

export { UserListItem }