import React from 'react'
import SearchUsers from '../../molecules/SearchUsers/SearchUsers'
import UserList from '../../organisms/UserList'

const UsersPrincipal = () => {
	return (
	<div>	
		<SearchUsers />
		<UserList />
	</div>
	)
}

export default UsersPrincipal