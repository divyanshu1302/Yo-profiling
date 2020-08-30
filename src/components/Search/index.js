import React, { Component } from 'react';
import './index.css'

export default class Search extends Component {

    constructor(props) {
        super(props);
    }

    handleInputChange = event => {
        const query = event.target.value;
        var nameQuery = this.props.nameQuery;
        var tagQuery = this.props.tagQuery;
        this.props.searchType == "name" ? nameQuery = query : tagQuery = query;
        var filteredProfiles = this.props.data;
        filteredProfiles = filteredProfiles.filter(element => {
            return element.firstName.toLowerCase().includes(nameQuery.toLowerCase()) ||
                element.lastName.toLowerCase().includes(nameQuery.toLowerCase());
        });
        console.log(filteredProfiles);
        filteredProfiles = this.tagsFiltering(filteredProfiles,tagQuery);
        console.log(filteredProfiles,"handleInputChange");
        this.props.setProfiles(filteredProfiles, nameQuery, tagQuery);
    };

    tagsFiltering(filteredProfiles,tagQuery){
        if(tagQuery==="") return filteredProfiles;
        var tagFilteredProfiles = [];
        filteredProfiles.forEach(profile => {
            var tags = profile.tags || [];
            var tag;
            for (tag of tags) {
                if(tag.toLowerCase().includes(tagQuery.toLowerCase())){
                    tagFilteredProfiles.push(profile);
                    break;
                }
            }
        });
        console.log(tagFilteredProfiles,"tagsFiltering");
        return tagFilteredProfiles;
    }

    render() {
        const { searchType, nameQuery, tagQuery } = this.props;
        return (
            <input
                className="search-text"
                placeholder={searchType == "name" ? "Search by name" : "Search by tag"}
                value={searchType == "name" ? nameQuery : tagQuery}
                onChange={this.handleInputChange}
            />
        );
    }
}