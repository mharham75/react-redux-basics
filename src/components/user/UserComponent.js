import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/user/UserActions'

const UserComponent = ({ users,fetchUsers }) => {
  return (
    <>
        <button onClick={ () => fetchUsers()}>Click To Get List Of Users</button>
        {users && users.map( u =>(
            <p>{u.id}</p>
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