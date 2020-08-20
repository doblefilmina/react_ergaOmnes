import React, {Component} from 'react';
import Card from './card';
import SearchUser from './searchuser';
import PropTypes from 'prop-types';


class MiRed extends Component {
  render() {
    return  <div className="red">
              <h6 className="red-title">Mi Red</h6>
              <SearchUser />
              <div className=" red-contact-list">
                <div className="test">
                  {this.props.users.map(user => <Card user={user} key={user.id}/> )}
                </div>
              </div>
            </div>
            
  }
}

MiRed.propTypes = {
  users: PropTypes.array.isRequired
}

export default MiRed;