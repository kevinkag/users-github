import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsersAsync, getListUsers, getMode, getStatus, setId, setMode } from '../../store/slices/usersSlice'
import NotFound from '../atoms/NotFound'
import Spinner from '../atoms/Spinner'
import UserItem from '../molecules/UserItem'

const ListUsers = () => {
    const listUsers = useSelector(getListUsers)
    const status = useSelector(getStatus)
    const mode = useSelector(getMode)
    const dispatch = useDispatch()
    
    const handleClick = (login) => {
        dispatch(setMode('card'))
        dispatch(setId(login))
    }

    useEffect(() => {
        const handleGetUsers = () => {
            dispatch(fetchAllUsersAsync())
        }
        handleGetUsers()
    }, [dispatch, mode])
    

    if (status === 'pending') {
        return <Spinner type="grow"/>
    }

    return (
        <div className='bg-light rounded'>
            {
                listUsers.length === 0
                    ?
                    <NotFound type="search-more"/>
                    :
                    <ul className='lista p-1'>
                        {listUsers.map((item, key) => (
                            <UserItem key={key} id={item.id} img={item.avatar_url} onClick={() => handleClick(item.login)}>{item.login}</UserItem>
                        ))}
                    </ul>
            }
        </div>
    )
}
export default ListUsers