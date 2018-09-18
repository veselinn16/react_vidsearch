import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        query: ''
    }

    render() {
        return (
            <div>
                <input 
                value={this.state.query}
                onChange={e => this.setState({query: e.target.value})} />
            </div>
        );
    } 
}

export default SearchBar;