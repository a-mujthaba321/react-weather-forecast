import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = { searchTerm : ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e){
        this.setState({
            searchTerm : e.target.value
        });
    }
    
    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.searchTerm);
        this.setState({
            searchTerm:''
        });

    }

    render () {

        return (
            <div onSubmit= {this.onFormSubmit} className="col-md-8 search-bar">
                <form className="input-group">
                    <input type="text"
                        value={this.state.searchTerm}
                        onChange={this.onInputChange} 
                        className="form-control" placeholder="Get Forecast for City..."/>

                        <span className="input-group-btn">
                            <button className="btn btn-default" name="search"
                            type="submit " >Go!</button>
                        </span>
                </form>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);