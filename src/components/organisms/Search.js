import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsersAsync, getMode, search, setId, setMode } from '../../store/slices/usersSlice'
import svgback from '../assets/back.svg'
import svgsearch from '../assets/search.svg'

const Search = () => {
    const [value, setValue] = useState('')
    const searchMode = useSelector(getMode)
    const dispatch = useDispatch()

    const handleBack = () => {
        dispatch(setMode('list'))
        setValue('')
    }

    const handleOnChange = (e) => {
        dispatch(search(e.target.value))
        setValue(e.target.value)
        if (e.target.value === '') {
            dispatch(fetchAllUsersAsync())
            setValue('')
        }
        e.preventDefault()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') {
            return
        }
        dispatch(setId(value))
        dispatch(setMode('card'))
        setValue('')
    }

    return (
        <form className='d-flex search rounded border-secondary' onSubmit={handleSubmit}>
            {
                searchMode === 'card'
                    ? <span className="boton bg-danger rounded-start p-2" onClick={handleBack}>
                        <img src={svgback} alt="back" className="icon-back mb-1" />
                    </span>
                    : null
            }
            <input name='search' type="text" value={value}
                className={`input-search ${searchMode === 'list' && 'rounded-start'}`}
                placeholder="Search..." onChange={handleOnChange} />
            <span className="boton bg-light rounded-end p-2" onClick={handleSubmit}>
                <img src={svgsearch} alt="search" className="icon-search" />
            </span>
        </form>
    )
}

export default Search