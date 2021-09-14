import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ACCOUNT } from '../shared/account';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        account: ACCOUNT,
      };
    }
  render() {
    const HomePage = () => {
      return (
        <Home 
          account={this.state.account.filter(account => accounts.featured)[0]}
          />
      );
    }
      return (
          <div> 
              <Header />
              <Switch> 
                <Route path='/home' component={HomePage} />
                <Route exact path='/directory' render={() => <Directory
                 account={this.state.account} />} />
                <Redirect to='/home' />
              </Switch>
              <Footer />
          </div>
      );
    }
}

export default Main;
