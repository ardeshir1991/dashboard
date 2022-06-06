import './UserList.scss';
import { DataGrid } from '@mui/x-data-grid';
import data from './../../assets/users.json';
import { DeleteOutline } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState(data.users);
    
    const columns = [
        {field: 'id', headerName:'ID', width: 90},
        {field: 'name', headerName:'Name', width: 200, renderCell:(params)=>{
            return(
                <div className="userInfo">
                    <img src={params.row.image} alt="" />
                    {params.row.name}
                </div>
            )
        }},
        {field: 'email', headerName:'Email', width: 200},
        {field: 'transaction', headerName:'Transaction', width: 90},
        {field: 'accountType', headerName:'Account Type', width: 150, renderCell:(params)=>{
            return(
                <div className="accountType">
                    <Link to={`/users/${params.row.id}`}>
                        <button>Edit</button>
                    </Link>
                    <DeleteOutline className='deleteIcon' onClick={()=>deleteHandler(params.row.id)}/>
                </div>
            )
        }}
    ];

    const deleteHandler = (id)=>{
        const newUsers = users.filter(user => user.id !== id);
        console.log(newUsers);
        setUsers(newUsers);
    }

    const rows = users;
  return (
    <div className='userList-container'>
        <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            disableSelectionOnClick
            pageSize={10}
            rowsPerPageOptions={[10]}
         />
    </div>
  )
}

export default UserList;