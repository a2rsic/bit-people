import React from 'react';
import PropTypes from 'prop-types'

const UserListItem = (props) => {

    const { userPicture, userName, userEmail, userAge, userGender } = props
    const colorFemale = userGender === 'female' ? 'red lighten-5' : '';

    return (


        <ul className="collection">
            <li className={`collection-item avatar ${colorFemale}`}>
                <img src={userPicture} alt="" className="circle" />
                <p><span>Name: </span>{userName}</p>
                <p><img src="/images/mail.svg" alt="" /><span>E-mail: </span>{userEmail}</p>
                <p><img src="/images/cake.svg" alt="" /><span>Age: </span>{userAge}</p>
            </li>
        </ul>

    )
}

UserListItem.propTypes = {
    userName: PropTypes.string,
    userPicture: PropTypes.string,
    userEmail: PropTypes.string,
    userAge: PropTypes.string
}

export { UserListItem }