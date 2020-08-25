import React from 'react';
import Card from './card';
import SearchUser from './searchuser';
import PropTypes from 'prop-types';

const MiRed = ({users}) => {
  return (
    <div className="red">
      <h6 className="red-title">Mi Red</h6>
      <SearchUser />
      <div className=" red-contact-list">
        <div className="test">
          {users.map(user => <Card user={user} key={user.id}/> )}
        </div>
      </div>
    </div>
  )
}

MiRed.propTypes = {
  users: PropTypes.array.isRequired
}

export default MiRed;