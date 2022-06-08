import React, { useState } from 'react';
import {Paper,InputBase,IconButton,List,Button,ButtonGroup} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {isEmpty} from 'lodash'
import { useDispatch, useSelector } from 'react-redux';
import { search, searchUsers, userDetails,} from '../../../store/slices/UsersSlice';
import SearchCardItem from '../SearchCardItem';
import {useStyles} from './searchusersStyles'
import { setDataByKey } from '../../../store/slices/UsersSlice';
import { fetchDataByKey } from '../../../utils/actions';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchUsers = () => {
  
  const classes = useStyles();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  const listSearch = useSelector(searchUsers)
  const [returnSearch, setReturnSearch] = useState(true)
  const [value, setValue] = useState('')
  const [noResults, setNoResults] = useState(false)
  const [noResultsTotal, setNoResultsTotal] = useState(false)


  const searching = (e) => {
    setReturnSearch(true)
    setValue(e)
    if(e === ''){
      setNoResults(true)
      setReturnSearch(false)
      return
    }
    dispatch(search(e))
    if (isEmpty(listSearch)) {
      setNoResults(true)
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };
 
  const searchOtherUser = async(login, e) => {
    let locate = location.pathname 

    dispatch(setDataByKey(await fetchDataByKey(login)))
    setValue('')
    setNoResults(false)
  
    if (inLocation(locate)) {
      navigate(`/user/${login}`)
    }
  }

  const validateResults = () => {
    if (!noResults) {
      searchOtherUser(value)
    }
  }

  const inLocation = (locate) => {
    let inlocate = false
     if (locate === `/`){
      inlocate = true
    }
    return inlocate
  }
  
  return (
   <> 
   <Paper component="form" onSubmit={handleChange} className={classes.root}>
    <InputBase
      className={classes.input}
      placeholder="Search users"
      value={value}
      onChange={(e) => searching(e.target.value)}
    />
    <IconButton type="submit" onClick={(e) => searchOtherUser(value, e)} onChange={() => searchOtherUser(value)} className={classes.iconButton} aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
 
  {
    !returnSearch || isEmpty(listSearch)
    ?
      null
    : 
    (<List dense className={classes.list}>
      {
        listSearch.map((item, key) => (
          (
            <div key={key}>
            <SearchCardItem item={item} key={key}/>
            </div>
          )
        ))
      }
    </List>)
  }
  {
    noResults & isEmpty(listSearch) 
    ?
    <ButtonGroup variant="text" color="default">
      <Button onClick={() => searchOtherUser(value)}>search more...</Button>
    </ButtonGroup>
    :
    noResultsTotal ? <p>no hay nada pa</p> : null 
    
  }
  </>
  )
}

export default SearchUsers