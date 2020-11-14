import React, { useEffect } from 'react';

import MainPage from './pages/main-page/main-page.component';
import CheckoutPage from './pages/check-out/check-out.component';
import ShoppingPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignningPage from './pages/signIn-signUp/signIn-signUp.component';

// import CurrentUserContext from './contexts/current-user/current-user.context';

// import { GlobalStyle } from './mobile.styles';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {

    checkUserSession();

  }, [checkUserSession]);

  return (

    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/shopping' component={ShoppingPage} />
        <Route exact path='/check-out' component={CheckoutPage} />
        <Route
          exact
          path='/sign-in'
          render = { () =>
            currentUser ? <Redirect to='/' /> : <SignningPage />
          }
        />
      </Switch>
    </div>

  );

}

const mapStateToProps = createStructuredSelector({

  currentUser: selectCurrentUser

});

const mapDispatchToProps = dispatch => ({
  
  checkUserSession: () => dispatch(checkUserSession())
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);