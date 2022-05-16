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
import { useSelector } from './component/hooks/useSelector';
import MyPostsPage from './component/myPostsPage/MyPostsPage';




const App: React.FC = () => {
  // const handclick = () => console.log(`Click green button`);
  const [lang, setLang] = useState("ru");
  const logged = useSelector(state => state.auth.logged);

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
          {!logged &&
            <>
              <Route path='/login/*' element={<Login />} />
            </>

          }

          <Route path='/registration' element={<Registration />} />
          <Route path='/posts/*'  >
            <Route index element={<PostsPage />} />
            <Route path=':id' element={<PostPage />} />
          </Route>
          {logged &&
            <Route path='/myposts' element={<MyPostsPage />} />
          }
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
