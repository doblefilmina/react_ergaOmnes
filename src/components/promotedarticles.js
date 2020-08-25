import React from 'react';
import PromotedArticle from './promotedarticle';
import PropTypes from 'prop-types';

const PromotedArticles = ({promotedarticles}) => {
  return (
    <div className="articulos-promocionados">
      <div className="p-0 mt-3" >
        <section className="container-fluid">
          <div className="row">
            
            <h6 className="w-100 text-center fs-12 text-sans-serif font-weight-bold my-5 col-12 px-0">Artículos</h6>
            
            {promotedarticles.map(promotedarticle => <PromotedArticle promotedarticle={promotedarticle} key={promotedarticle.id}/> )}

            <button href="#" className="red-link w-100 text-center">Ver más</button>
          </div>    
        </section>
      </div>
    </div>
  )
}

PromotedArticles.propTypes = {
  promotedarticles: PropTypes.array.isRequired
}

export default PromotedArticles;