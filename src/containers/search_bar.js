import React, {Component} from 'react';

export default class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = { searchTerm : ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e){
        console.log(e.target.value);
        this.setState({
            searchTerm : e.target.value
        });
    }
    
    onFormSubmit(e) {
        e.preventDefault();

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
                            type="button" >Go!</button>
                        </span>
                </form>
            </div>
        );
    }

}