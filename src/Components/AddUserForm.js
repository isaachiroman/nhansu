import React, { Component } from 'react';
import EditUserRow from './EditUserRow';
class AddUser extends Component {
    constructor(props){
         super(props);
         this.state={
             id:"",
             Name: "",
             Email:"",
             Tel:"",
             Permission:"",
             statusAddUserButton:false,
             userObj:{}
         }
        
    }
    //bien, ham them moi user
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        // console.log(value);
        this.setState({
            [name]:value,
        });
        
    }
    changeAddUserFormStatus=()=>{
        this.setState({
            statusAddUserButton:!this.state.statusAddUserButton
        });
    }
    showAddUserFormButton = ()=>{
        if(this.state.statusAddUserButton === true){
            return <button className="btn btn-danger mt-1 ml-3" onClick={()=>this.changeAddUserFormStatus()} >Cancel</button>
        }
        else{
            return <button className="btn btn-info mt-1 ml-3" onClick={()=>this.changeAddUserFormStatus()}><i className="fas fa-plus"></i> Add new</button>   
        }
    }
    getEditUserInfo = (info)=>{
        this.setState({
            userObj:info
        });
        this.props.getEditUserInfoApp(info);
    }
    showEditUserRow= ()=>{
        if(this.props.editUserRowStatus===true){
            return   <EditUserRow
                        getEditUserInfo={(info)=>this.getEditUserInfo(info)}
                        editUserObject={this.props.editUserObject}
                        changEditUserRowStatus={()=>this.props.changEditUserRowStatus()}
                     />
        }
    }
   

    showAddUserForm = ()=>{
        if(this.state.statusAddUserButton === true){
            return(
                <div className="col-sm-12">
                <form className="effectAddUserForm">
                   
                        <div className="col-sm-3 float-sm-left">
                            <input type="text" onChange={(event)=> this.isChange(event)} name="Name" className="form-control mt-3 mb-1" placeholder="Name" />
                        </div>
                        <div className="col-sm-3 float-sm-left">
                            <input type="text" onChange={(event)=> this.isChange(event)} name="Email" className="form-control mt-3 mb-1" placeholder="Email" />
                        </div>
                        <div className="col-sm-3 float-sm-left">
                            <input type="text" onChange={(event)=> this.isChange(event)} name="Tel" className="form-control mt-3 mb-1" placeholder="Phone" />
                        </div>
                        <div className="col-sm-2 float-sm-left">
                            <select className="custom-select mt-3 mb-1" onChange={(event)=> this.isChange(event)} name="Permission" id="inlineFormCustomSelectPref">
                                <option value>Choose Role...</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Owner</option>
                                <option value={3}>Other</option>
                            </select>
                        </div>
                        <div>
                        <input type="reset" onClick={(Name,Email,Tel,Permission)=>this.props.add(this.state.Name, this.state.Email, this.state.Tel, this.state.Permission)}  className="btn btn-success btn-circle mr-1 ml-1 mt-3" />   
                        
                       </div>
                        
                     </form>
                </div>
                )
        }
    }
   
    render() {
        return (
            <div>
                {this.showAddUserFormButton()} 
                {this.showAddUserForm()}
                {this.showEditUserRow()}
            </div>
        );
    }
}

export default AddUser;
