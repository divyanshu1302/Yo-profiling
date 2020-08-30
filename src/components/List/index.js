import React, {Component} from 'react';
import ProfileView from '../ProfileView';
import Divider from '../Divider';
import './index.css'

export default class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
  }

  renderList = (component,data) => {
    if(component === 'profile-view'){
        return <div className="profiles-container">
        <div>{data.map((profile, index) => this.renderProfile(profile))}</div>
        </div>
    }
  }

  renderProfile = (profile) => {
      return <div>
      <ProfileView
        profile = {profile}
        setTagInProfile = {this.props.setTagInProfile}
      />
      <Divider/>
      </div>
  }

  render() {
    const {component, data} = this.props;
    return this.renderList(component,data)
  }

}
