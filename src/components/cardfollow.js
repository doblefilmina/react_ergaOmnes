import React from 'react';
import PropTypes from 'prop-types';

const CardFollow = ({user}) => {
  return (
    <div className="recomendados-card">
      <img className="rounded-circle"
        src={user.imgUrl}
        alt={user.Name}
      />
      <div className="recomendados-card-body">
        <h6 className="recomendados-name">{user.Name}</h6>
        <h6 className=" recomendados-speciality">{user.Speciality}</h6>
        <button type="button" className="recomendados-btn">Seguir</button>
      </div>
    </div>
  )
}


CardFollow.propTypes = {
  user: PropTypes.object.isRequired
}

export default CardFollow;
