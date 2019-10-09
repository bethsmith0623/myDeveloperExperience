import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styles from './MainPage.module.css';
import userService from '../../utils/userService';
import BlogPostPage from '../BlogPostPage/BlogPostPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import AllPostsPage from '../AllPostsPage/AllPostsPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AdminPage from '../AdminPage/AdminPage';
import * as postAPI from '../../services/posts-api';


function MainPage(...props) {
  console.log(props[0].user)
  console.log(props[0].handleSignupOrLogin)
  return (
    <div className={styles.MainPage}>
      <Switch>
      <Route exact path='/' render={() => <AllPostsPage /> } />
      <Route exact path='/blog/{post:id}' render={() => <BlogPostPage />} />
      <Route exact path='/login' render={({history}) => 
        <LoginPage
          handleSignupOrLogin={props[0].handleSignupOrLogin} 
          history={history}
        />} />
      <Route exact path='/signup' render={({history}) => 
        <SignupPage 
          handleSignupOrLogin={props[0].handleSignupOrLogin} 
          history={history}		
          />} />
      <Route exact path='/about' render={() => <AboutPage />} />
      <Route exact path='/contact' render={() => <ContactPage />} />
      <PrivateRoute
        component={AdminPage}
        user={props[0].user}
        path='/admin' />
      </Switch>
    </div>
  )
};

export default MainPage;