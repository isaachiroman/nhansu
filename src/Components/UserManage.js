import React, { Component } from 'react';
import SearchUserControl from './SearchUserControl';
import AddUserForm from './AddUserForm';
import DataUser from './DataUser';
import TableDataUser from './TableDataUser';

const uuidv1=require('uuid/v1')
class UserManage extends Component {
    // thongBao = ()=>{alert("ket noi ok");}
    constructor(props){ 
        super(props);
       this.state = {
            searchText:'',
            data:[],
            editUserRowStatus:false,
            editUserObject:{}
       }
    }
    
    componentWillMount() {
        if(localStorage.getItem('userData') === null){
            localStorage.setItem('userData',JSON.stringify(DataUser));
        }
        else{
            var temp = JSON.parse(localStorage.getItem('userData'));
            this.setState({
                data:temp
            });
        }
    }
    

    getTextSearch = (dl) => {
        this.setState({
            searchText:dl
        });
    }
    getNewUserData = (Name,Email,Tel,Permission) => {
        // console.log('ok ok');
        var item = {};
        item.id = uuidv1();
        item.Name = Name;
        item.Email = Email;
        item.Tel = Tel;
        item.Permission = Permission;
        var items = this.state.data;
        items.push(item);
        this.setState({
            data:items
        });
        // console.log(this.state.data);
        localStorage.setItem('userData',JSON.stringify(items));
    }

   //ham, bien cho phan edit user
    editUserRow = (user)=>{
       console.log("ok");
       this.setState({
        editUserObject:user
       });
       console.log(user);
       
    }
    changEditUserRowStatus= ()=>{
       this.setState({
        editUserRowStatus: !this.state.editUserRowStatus
       });
    }
    getEditUserInfoApp=(info)=>{
        this.state.data.forEach((value, key)=>{
            if(value.id===info.id){
                value.Name=info.Name;
                value.Email=info.Email;
                value.Tel=info.Tel;
                value.Permission=info.Permission;
            }
        })
        localStorage.setItem('userData',JSON.stringify(this.state.data));
    }
   
   //end ham, bien cho phan edit user

    //ham, bien cho phan delete user
    deleteUser = (idUser)=>{
        // console.log(idUser);
        var tempData = this.state.data.filter(item=>item.id !== idUser);
        this.setState({
            data:tempData
        });
        localStorage.setItem('userData',JSON.stringify(tempData));
    }
    //endham, bien cho phan delete user
    render() {

       // console.log(this.state.data);
        //cac bien, ham cho phan search
            var result=[];
            this.state.data.forEach((item)=>{
                if(item.Name.indexOf(this.state.searchText)!==-1){
                    result.push(item);
                }
            })
          //  console.log(result); 
        //end cac bien, ham cho phan search
        return (
            <div className="container-fluid">
                <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div className="pt-2 pb-2">
                            <SearchUserControl 
                                getTextSearchProps={(dl)=>this.getTextSearch(dl)} 
                              
                            />
                            <AddUserForm 
                                getEditUserInfoApp={(info)=>this.getEditUserInfoApp(info)}
                                editUserObject={this.state.editUserObject}
                                changEditUserRowStatus={()=>this.changEditUserRowStatus()}
                                editUserRowStatus={this.state.editUserRowStatus}
                                add={(Name,Email,Tel,Permission) => this.getNewUserData(Name,Email,Tel,Permission)} 
                            />
                        </div>
                        <TableDataUser 
                            deleteUser={(idUser)=>this.deleteUser(idUser)}
                            changEditUserRowStatus={()=>this.changEditUserRowStatus()}
                            editUserRow={(user)=>this.editUserRow(user)}
                            dataUserProps={result}
                        />
                </div>
            </div>
                
        );
    }
}

export default UserManage;