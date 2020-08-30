import React, { Component } from 'react';
import List from '../../components/List'
import Search from '../../components/Search';
import axios from 'axios';
import './index.css'
import Divider from '../../components/Divider';

export default class Profiles extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profiles: [],
            filteredProfiles: [],
            nameQuery:"",
            tagQuery:""
        }
        this.setProfiles = this.setProfiles.bind(this);
        this.setTagInProfile = this.setTagInProfile.bind(this);
    }

    //function which is called the first time the component loads
    componentDidMount() {
        this.getProfiles();
    }

    setTagInProfile = profile => {
        var profiles = this.state.profiles;
        var filteredProfiles = this.state.filteredProfiles;
        var foundIndex1 = profiles.findIndex(x => x.id == profile.id);
        var foundIndex2 = filteredProfiles.findIndex(x => x.id == profile.id);
        profiles[foundIndex1] = profile;
        filteredProfiles[foundIndex2] = profile;
        this.setState({profiles,filteredProfiles})
    }

    getProfiles = () => {
        axios.get(`https://www.hatchways.io/api/assessment/students`)
            .then(res => {
                const data = res.data || {};
                this.setState({ profiles: data.students || [], filteredProfiles: data.students || [] });
            })
    }

    setProfiles = (filteredProfiles, nameQuery, tagQuery) => {
        this.setState({ filteredProfiles, nameQuery, tagQuery});
    }

    render() {
        return (
            <div className="app-body">
                <Search
                    data={this.state.profiles}
                    setProfiles={this.setProfiles}
                    searchType="name"
                    nameQuery={this.state.nameQuery}
                    tagQuery={this.state.tagQuery}
                    className="name-search"
                />
                <Divider />
                <Search
                    data={this.state.profiles}
                    setProfiles={this.setProfiles}
                    searchType="tags"
                    nameQuery={this.state.nameQuery}
                    tagQuery={this.state.tagQuery}
                    className="tag-search"
                />
                <Divider />
                <List
                    data={this.state.filteredProfiles}
                    component="profile-view"
                    setTagInProfile={this.setTagInProfile}
                /></div>
        )
    }

}
