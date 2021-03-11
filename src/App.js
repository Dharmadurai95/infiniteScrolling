import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './Redux/Redux-Form'
import InfiniteScrolling from './infiniteScrolling/infiniteScrolling'



function App() {



  return (
    <div className="App">
      <InfiniteScrolling />
     {/* <UserForm /> */}
      {/* <iframe src='http://localhost:3000/'title='esaf-loan' ></iframe> */}
    </div>
  );
}

export default App;


