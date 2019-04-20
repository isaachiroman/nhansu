import React, { Component } from 'react';

class EditUserRow extends Component {

    constructor(props){
         super(props);
         this.state={
             id:this.props.editUserObject.id,
             Name:this.props.editUserObject.Name,
             Email:this.props.editUserObject.Email,
             Tel:this.props.editUserObject.Tel,
             Permission:this.props.editUserObject.Permission
            }
        }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        // console.log(value);
        this.setState({
            [name]:value,
        });
        
    }
    saveButton = ()=>{
        var info={};
        info.id=this.state.id;
        info.Name=this.state.Name;
        info.Email=this.state.Email;  
        info.Tel=this.state.Tel;
        info.Permission=this.state.Permission;
        this.props.getEditUserInfo(info);
        this.props.changEditUserRowStatus();
    }
    render() {
        return (
            <div className="col-sm-12">
                <form className="effectAddUserForm">
                        <div className="col-sm-3 float-sm-left">
                            <input defaultValue={this.props.editUserObject.Name} type="text" onChange={(event)=> this.isChange(event)} name="Name" className="form-control mt-3 mb-1" placeholder="Name" />
                        </div>
                        <div className="col-sm-3 float-sm-left">
                            <input defaultValue={this.props.editUserObject.Email} type="text" onChange={(event)=> this.isChange(event)} name="Email" className="form-control mt-3 mb-1" placeholder="Email" />
                        </div>
                        <div className="col-sm-3 float-sm-left">
                            <input defaultValue={this.props.editUserObject.Tel} type="text" onChange={(event)=> this.isChange(event)} name="Tel" className="form-control mt-3 mb-1" placeholder="Phone" />
                        </div>
                        <div className="col-sm-2 float-sm-left">
                            <select defaultValue={this.props.editUserObject.Permission} className="custom-select mt-3 mb-1" onChange={(event)=> this.isChange(event)} name="Permission" id="inlineFormCustomSelectPref">
                                <option value>Choose Role...</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Owner</option>
                                <option value={3}>Other</option>
                            </select>
                        </div>
                        <div>
                        <button onClick={()=>this.saveButton()}  className="btn btn-success btn-circle mr-1 ml-1 mt-3" > <i className="fas fa-check"></i></button>
                      
                        </div>
                        
                     </form>
                </div>
        );
    }
}

export default EditUserRow;