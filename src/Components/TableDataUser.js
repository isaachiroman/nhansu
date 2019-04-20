import React, { Component } from 'react';
import TableDataUserRow from './TableDataUserRow';

class TableDataUser extends Component {
    deleteButtonClick = (idUser)=>{
        this.props.deleteUser(idUser);
    }
    mappingDataUser = ()=>  this.props.dataUserProps.map((value,key)=>(
        <TableDataUserRow  
            deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)}
            changEditUserRowStatus={()=>this.props.changEditUserRowStatus()}
            editFunClick={(user)=>this.props.editUserRow(value)}
            id={value.id}
            userName={value.Name} 
            email={value.Email} 
            tel={value.Tel}
            permission={value.Permission}  
            key={key}
            stt={key}
        />
    ))
    
    render() {
        //console.log(this.props.dataUserProps);
        return (
            <div className="table-responsive pt-2">
                <table className="table table-borderedv table-hover table-striped table-condensed"  width="100%" cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        
                    </tfoot>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableDataUser;