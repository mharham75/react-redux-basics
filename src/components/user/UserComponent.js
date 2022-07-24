import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/user/UserActions'

import "./UserStyle.css"

const UserComponent = ({ users,fetchUsers }) => {
  return (
    <>
        <button onClick={ () => fetchUsers()}>Click To Get List Of Users</button>
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