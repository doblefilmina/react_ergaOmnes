import React from 'react';
import Article from './article';
import PropTypes from 'prop-types';

const Articles = ({users}) => {
  return (
    <div className="articulos">
      <button type="button" className="articulos-btn"> <span><i className="fas fa-edit sm-screen"></i> Crear publicación</span>  | <span><i className="fas fa-feather-alt bg-screen"></i>  Redactar Artículo</span> </button>
      <div className="day-separator-feed">Actualizado hace 5 minutos</div> 
      {users.map(user => <Article user={user} key={user.id}/> )}
    </div>
  )

}

Articles.propTypes = {
  users: PropTypes.array.isRequired
}

export default Articles;