import React, { Component } from 'react';


class SearchUserControl extends Component {
    constructor(props){ 
        super(props);
        this.state={
            tempValue:''
        }
    }
    isChange = (event) =>{
        //console.log(event.target.value);
        this.setState({
            tempValue:event.target.value
        });
        this.props.getTextSearchProps(this.state.tempValue);
    }
   
    render() {
        return (
            <div>
                <div className="col-sm-6 float-sm-right">
                    <div className="input-group">
                        <input onChange={(event)=> this.isChange(event)} type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button onClick={(dl)=>this.props.getTextSearchProps(this.state.tempValue)} className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchUserControl;