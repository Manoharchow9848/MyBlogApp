import React from 'react'
import {BrowserRouter,Route,Routes,Outlet, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import DashBoard from './pages/DashBoard'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRouutes'
import CreatePost from './pages/CreatePost'
import { useSelector } from 'react-redux';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import Protect from './components/Protect'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import Search from './pages/Search'
export default function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
      
      <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route element={<Protect />}>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        </Route>
        
        <Route path='/projects' element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />

        <Route element={<PrivateRoute />}>
        <Route path='/dashboard' element={<DashBoard />} />      
          </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
          
        </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    
  )
}
