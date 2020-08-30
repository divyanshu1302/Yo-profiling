import React, { Component } from 'react';
import './index.css'
import InputTag from '../InputTag';

export default class ProfileView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      expandProfile: false,
    }
    this.setTags = this.setTags.bind(this);
  }

  //function which is called the first time the component loads
  componentDidMount() {
  }

  setTags = (tags) => {
    this.props.setTagInProfile({ ...this.props.profile, tags: tags });
  }


  toggleProfile = () => {
    this.setState(prevState => ({
      expandProfile: !prevState.expandProfile
    }))
  }

  render() {
    const { profile } = this.props;
    return <div className="profile-container">
      <div className="profile">
        <div className="profile-image">
          <img src={profile['pic']} />
        </div>
        <div className="profile-details">
          <div className="profile-name">{profile['firstName'].toUpperCase()} {profile['lastName'].toUpperCase()}</div>
          <div className="profile-meta">
            <div className="profile-meta-info">
              <div className="profile-email">Email: {profile['email'] || "-"}</div>
              <div className="profile-company">Company: {profile['company'] || "-"}</div>
              <div className="profile-skill">Skill: {profile['skill'] || "-"}</div>
            </div>
            {this.state.expandProfile && <div class="profile-meta-grades">
              {profile.grades && profile.grades.map((grade, index) => <div className="profile-average">test: {grade || "-"}</div>)}
              <InputTag
                tags={profile['tags'] || []}
                setTags={this.setTags}
                className="input-tag"
              />
            </div>}
          </div>
        </div>
      </div>
      {this.state.expandProfile ?
        <div className="toggle-icon" onClick={() => { this.toggleProfile() }}>
          -
        </div>
        : <div className="toggle-icon" onClick={() => { this.toggleProfile() }}>
          +
      </div>}
    </div>
  }

}
