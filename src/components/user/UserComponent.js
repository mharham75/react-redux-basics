import React, {useState} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/user/UserActions'

import "./UserStyle.css"

const UserComponent = ({ users,fetchUsers }) => {

    const[isUsers,setIsUsers] = useState(false)

    const getUsers = () => {
        fetchUsers()
        setIsUsers(true)
    }

  return (
    <>
        {!isUsers && <button onClick={getUsers}>Click To Get List Of Users</button>}
        {users.loading && <p>Loading...</p>}
        {users.error && <p>{users.error}</p>}
        {users && users.map( u =>(
            <div className="user-card" key={u.id}>
                <h2 className='user-card-heading'>{u.username}</h2>
                <p className='user-card-name'>{u.name}</p>
                <p className='user-card-email'>{u.email}</p>
                <p className='user-card-website'>{u.website}</p>
            </div>
        ))}
    </>
  )
}

const mapStateToProps = state => {
    return{
        users: state.user.users
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserComponent)