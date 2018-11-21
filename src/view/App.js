import React, { Fragment } from 'react';
// import PropTypes from 'prop-types'

import './App.css';
import { UsersList } from './users/UsersList';
// import { UserCardItem } from './users/UserCardItem';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
// import { UserListItem } from './users/UserListItem';


const App = ({usersData}) => {
  return (
    < Fragment >
        <header className="App-header">
          < Header />
        </header>
      < main className="App" >

        <UsersList listOfUsers={usersData} />
      </main >
      <footer className="App-footer">
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
