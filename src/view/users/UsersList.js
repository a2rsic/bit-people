import React from 'react'
import PropTypes from 'prop-types'
import { UserListItem } from './UserListItem';
// import User from "../entities/User"

const UsersList = ({ listOfUsers }) => {

    const userItems = listOfUsers.map((user, index) => {
        return <UserListItem key={index} userName={user.name.first} userEmail={user.email} userAge={user.dob.age} userPicture={user.picture.thumbnail} />
    })

    return (
        <div className="container">
            {userItems}
        </div>
    )
}

UsersList.propTypes = {
    listOfUsers: PropTypes.arrayOf(PropTypes.any)
};

export { UsersList }