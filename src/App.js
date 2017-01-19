import React from 'react';
import './App.css';
import ListOfPhotos from './components/ListOfPhotos'
import { connect } from 'react-redux';
import {Router, Route, hashHistory} from "react-router"


const App = (props) => {
    return (
      <div className="App">
        <Router history={hashHistory}>
          <Route path="/" component={ListOfPhotos}/>
          <Route path="/1" component={ListOfPhotos}/>
          <Route path="/2" component={ListOfPhotos}/>
          <Route path="/3" component={ListOfPhotos}/>
          <Route path="/4" component={ListOfPhotos}/>
          <Route path="/5" component={ListOfPhotos}/>
          <Route path="/6" component={ListOfPhotos}/>
          <Route path="/8" component={ListOfPhotos}/>
          <Route path="/9" component={ListOfPhotos}/>
          <Route path="/10" component={ListOfPhotos}/>
        </Router>
      </div>
    );
};

// trying of making Route render by means of array usage

/*            { (() => {
             let links = []; 
              for (let i = 1; i < 10; i++) {
               links.push(
                  <Route key={i} path={"/"+i} component={ListOfPhotos}/>
                )
             }
               console.log("Routelinks", links);
              return links
            })()
          }
*/

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({})
)(App);
