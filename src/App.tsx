import React, { useState } from 'react';
import Clicker from './component/clicker/Clicker';
import Timer from './component/timer/Timer';
//import logo from './logo.svg';
import './App.scss';
//import Button from './component/button/Button';
import PostsPage from './component/postsPage/PostsPage'
import Header from './component/header/Header';
import Registration from './component/registration/Registration'
import Login from './component/login/Login';
import PostPage from './component/postPage/PostPage';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';




const App: React.FC = () => {
  // const handclick = () => console.log(`Click green button`);
  const [lang, setLang] = useState("ru");

  return (
    <BrowserRouter>
      <div className="App-conteiner">
        <Header />



        <Routes>
          <Route path='/Clicker/*' element={
            <div>
              <Clicker />
              <Clicker />
              <Clicker />
            </div>
          } />
          <Route path='/login/*' element={<Login />} />
          <Route path='/registration/*' element={<Registration />} />
          <Route path='/posts'  >
            <Route index element={<PostsPage />} />
            <Route path=':id' element={<PostPage />} />
          </Route>
          <Route path='*' element={<Navigate to='/posts' />} />
        </Routes>




        {/* <Post id={14} /> */}
        {/* <Login /> */}
        {/* <Registration /> */}
        {/* <Posts /> */}
        {/* <Clicker />*/}



        {/*<Button
              color="blue"
              handclick={() => console.log("Click blue button")}
            ></Button>
            <Button
              color="green"
              handclick={handclick}
        ></Button>*/}

      </div>
    </BrowserRouter>
  );
}

export default App;
