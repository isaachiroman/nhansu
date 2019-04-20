import React, { Component } from 'react';

class TableDataUserRow extends Component {
    permissionShowConvert = ()=>{
        if(this.props.permission===1){
            return "Admin";
        }
        else if(this.props.permission===2){
            return "Owner";
        }else{
            return "Other";
        }
    }
    editClick=()=>{
        this.props.editFunClick();
        this.props.changEditUserRowStatus();
    }
    deleteButtonUser = (idUser)=>{
        this.props.deleteButtonClick(idUser);
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.email}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShowConvert()}</td>
                <td>
                    <button onClick={()=> this.editClick()} className="btn btn-warning btn-circle btn-sm mr-1 ml-1 ">
                        <i className="fas fa-edit"></i>
                    </button>
                    {/* <button href="a" className="btn btn-success btn-circle btn-sm mr-1 ml-1">
                        <i className="fas fa-check"></i>
                    </button> */}
                    <button onClick={(idUser)=>this.deleteButtonUser(this.props.id)} className="btn btn-danger btn-circle btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    
                </td>
            </tr>
        );
    }
}

export default TableDataUserRow;