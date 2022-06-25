import React from 'react';
import Search from './components/organisms/Search';
import './App.css'
import ListUsers from './components/organisms/ListUsers';
import UserCard from './components/molecules/UserCard';
import { useSelector } from 'react-redux';
import { getMode } from './store/slices/usersSlice';

function App() {
  const mode = useSelector(getMode)
 
  return (
    <React.Fragment>
      <div className='app'>
        <div style={{ width: 350 }}>
          <Search />
          {
            mode === 'card' ? <UserCard /> : <ListUsers />
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default App