import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ListUsers from './components/ListUsers';
import Action from './components/Action';

function App() {
  return (
    <Provider store={store}>
      <div className="App container my-5">
        <h1 className='w-100 p-4 bg-dark text-white fw-bold'>
          Thông tin sinh viên
        </h1>
        <ListUsers />
        <Action />
      </div>
    </Provider>
  );
}

export default App;
