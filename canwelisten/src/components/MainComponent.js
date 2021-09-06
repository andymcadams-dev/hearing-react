import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import AboutInfo from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ACCOUNT } from '../shared/account';
import { SITEMAP } from '../shared/sitemap';
import { ABOUTUS } from '../shared/about';





class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        account: ACCOUNT,
        sitemap: SITEMAP,
        aboutus: ABOUTUS
      };
    }

    

  render() {
    const HomePage = () => {
      return (
        <Home 
          account={this.state.account.filter(account => account.featured)[0]}
          sitemap={this.state.sitemap.filter(sitemap => sitemap.featured)[0]}
          about={this.state.aboutus.filter(aboutus => aboutus.featured)[0]}
          />
      );
    }
    const AboutWithId = ({match}) => {
        return(
          <AboutInfo 
            about={this.state.aboutus.filter(about => about.id === 
            +match.params.aboutId)[0]}
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
                 <Route path='/directory/:aboutusId' component={AboutWithId}/>
                 <Route exact path='/aboutus' render={() => <About aboutus={ABOUTUS}/> }/>
                <Route exact path='/contactus' component={Contact} />
                <Redirect to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;
