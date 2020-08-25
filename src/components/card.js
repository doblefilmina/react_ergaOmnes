import React from 'react';
import PropTypes from 'prop-types';

const Card = ({user}) => {
  return (
    <button className="red-card border-0 align-items-center text-decoration-none">
      <img className="rounded-circle"
        src={user.imgUrl}
        alt={user.Name}
      />
      <div className="red-card-body">
        <h6 className="red-name">{user.Name}</h6>
        <h6 className=" red-speciality">{user.Speciality}</h6>
      </div>
    </button>
  )
}

Card.propTypes = {
  user: PropTypes.object.isRequired
}

export default Card;