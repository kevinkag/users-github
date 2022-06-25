import React, { useEffect } from 'react'
import { getId, getUser, setUserById } from '../../store/slices/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '../../actions'
import NotFound from '../atoms/NotFound'
import svg_github from '../assets/github.svg'
import svg_site from '../assets/site.svg'
import TableStats from '../atoms/TableStats'

const UserCard = (props) => {
  const login = useSelector(getId)
  const user = useSelector(getUser)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const response = await fetchUserById(login)
      dispatch(setUserById(response))
    })()
  }, [dispatch, login])

  return (
    <div className='container-fluid bg-light rounded border shadow'>
      {user
        ? <>
          <div className='row'>
            <div className='col-3 mt-2'><img src={user.avatar_url} className="avatarlg" alt="..." /></div>
            <div className='col-6 border-end'>
              <div className='fs-6 border-bottom text-dark d-flex flex-row'><div className='text-secondary'>@</div>{user.login}</div>
              <div className=''><div className='fs-6'></div>{user.name}</div>
              <div className='text-description'>{user.location && `location: ${user.location}`}</div>
              <div className='text-description-sm text-success'>{user.company && `companies: ${user.company}`}</div>
            </div>
            <div className='col-3 text-description-sm'>
              <div className='row p-1'>
                <TableStats tableProps={tableProps(user)} />
              </div>
            </div>
          </div>
          <div className='row mt-2 mb-1'>
            <div className='col-6 border-end d-flex flex-row align-items-center justify-content-center'><img className='icon-card' src={svg_github} alt="github" /> <a className='ms-1' href={user.url} target="_blank" rel='noreferrer'> GitHub</a></div>
            <div className='col-6 border-end d-flex justify-content-center'>{user.blog && (<><img className='icon-normal' src={svg_site} alt="site" />{' '}<a href={user.blog} target="_blank" rel='noreferrer' >Site</a></>)}</div>
          </div></>
        :
        <NotFound />
      }
    </div>
  )
}

const tableProps = (user) => {
  return {
    'id': user.id,
    'repos': user.public_repos,
    'gists': user.public_gists,
    'followers': user.followers,
    'follow': user.following,
  }
}

export default UserCard