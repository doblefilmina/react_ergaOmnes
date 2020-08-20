import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ArticleHeader extends Component {

  StyleCompleted() {
    return {
      fontSize: '20px',
      }
  }
  render() {
    const {user} = this.props;
    
    return <div className="articulos-header">
            <div className="articulos-media">
              <img className="mr-0 rounded-circle"
                    src={user.imgUrl}
                    alt={user.Name}
                  />
              <div className="articulos-media-body">
                <h6 className="articulos-name">{user.Name}</h6>
                <h6 className=" articulos-speciality">{user.Speciality}</h6>
              </div>
            </div>
            <span className="articulos-time-ago" >{user.articledate}</span>
          </div>
  } 
}

class ArticleBody extends Component {

  StyleCompleted() {
    return {
      fontSize: '20px',
      }
  }
  render() {
    const {user} = this.props;
    return <p className="articulos-cuerpo" >{user.articletext}</p>
  } 
}

class ArticleFooter extends Component {

  StyleCompleted() {
    return {
      fontSize: '20px',
      }
  }
  render() {
    const {user} = this.props;
    return <div className="articulos-footer" >
            <span className="articulos-interaccions"><button href="#">{user.articlesignatures} firmas</button> - <button href="#">{user.articlescomments} comentarios</button></span>
            <div className="articulos-signature" >
              <button href="#" class="articulos-signature-text" >Dejar firma</button>
              <button href="#" class="articulos-signature-icon"><i className="fas fa-share-alt"></i></button>
            </div>
          </div>
  } 
}

class Article extends Component {

  StyleCompleted() {
    return {
      fontSize: '20px',
      }
  }
  render() {
    const {user} = this.props;
    return  <div className="articulos-article">
              <ArticleHeader user={user} />
              <ArticleBody user={user} />
              <ArticleFooter user={user} />
            </div>
  } 
}

Article.propTypes = {
  user: PropTypes.object.isRequired
}


export default Article;