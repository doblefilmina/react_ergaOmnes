import React, {Component} from 'react';
import CardFollow from './cardfollow';
import PropTypes from 'prop-types';


class Recomended extends Component {
  render() {
    return  <div className="recomendados">
              <div className="recomendados-content">
                <h6 className="recomendados-title">Recomendados</h6>
                {this.props.users.map(user => <CardFollow user={user} key={user.id}/> )}
              </div>
            </div>
  }
}

Recomended.propTypes = {
  users: PropTypes.array.isRequired
}

export default Recomended;