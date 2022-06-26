import React, { useEffect } from 'react'
import { getId } from '../../store/slices/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import NotFound from '../atoms/NotFound'
import svg_github from '../assets/github.svg'
import svg_site from '../assets/site.svg'
import TableStats from '../atoms/TableStats'
import { anUser, fetchAnUser, userStatus } from '../../store/slices/anUserSlice'
import Spinner from '../atoms/Spinner'

const UserCard = () => {
  const user = useSelector(anUser)
  const status = useSelector(userStatus)
  const login = useSelector(getId)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleUserById = (login) => {
      dispatch(fetchAnUser(login))
    }
    handleUserById(login)
  }, [dispatch, login])

  if (status === 'pending') {
    return <Spinner type="grow"/>
  }


  return (
    <div className='container bg-light rounded shadow pad'>
      {user
        ? <>
          <div className='row'>
            <div className='col-3 pt-2 ps-2 col-0'>
              <img src={user.avatar_url} className="avatarlg" alt="..." />
              </div>
            <div className='col-6 col-0 estilo-x border-end'>
              <div className='border-bottom text-dark d-flex flex-row pt-1'><div className='text-secondary'>@</div>{user.login}</div>
              <div className='texto-md'>{user.name}</div>
              <div className='text-description'>{user.location && `location: ${user.location}`}</div>
              <div className='text-description-sm text-success'>{user.company && `companies: ${user.company}`}</div>
            </div>
            <div className='col-2 col-0'>
              <TableStats item={user} />
            </div>
          </div>
          <div className='row mt-2 pb-1'>
            <div className='col-6 border-end d-flex flex-row align-items-center justify-content-center'><img className='icon-card' src={svg_github} alt="github" /> <a className='ms-1' href={user.url} target="_blank" rel='noreferrer'> GitHub</a></div>
            <div className='col-6 d-flex justify-content-center'>{user.blog && (<><img className='icon-normal' src={svg_site} alt="site" />{' '}<a href={user.blog} target="_blank" rel='noreferrer' >Site</a></>)}</div>
          </div></>
        :
        <NotFound />
      }
    </div>
  )
}


export default UserCard