import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PromotedArticle extends Component {

  StyleCompleted() {
    return {
      fontSize: '20px',
      }
  }
  render() {
    const {promotedarticle} = this.props;
    
    return <div class="card mx-4 mb-6 mt-0 shadow-sm border-0 w-100">
            <img className="mx-0 px-0 w-100"
                    src={promotedarticle.imgUrl}
                    alt={promotedarticle.author}
                  />
              <div className="card-body p-0">
                <h6 className="w-100 text-left fs-12 text-sans-serif font-weight-bold my-3 col-12 mx-1 px-0">Homicidio y Lesiones</h6>
                <h6 className="w-100 text-left fs-09 text-sans-serif font-weight-bold my-3 col-12 mx-1 px-0">Artículo por Tomas Druck</h6>
              </div>
            </div>
  } 
}


PromotedArticle.propTypes = {
  user: PropTypes.object.isRequired
}


export default PromotedArticle;