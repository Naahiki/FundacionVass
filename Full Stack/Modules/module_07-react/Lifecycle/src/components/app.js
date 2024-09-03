import React, { Component } from 'react';



import PageContent from './page-content';
import Navigation from './navigation';
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>DevCamp React Starter</h1>
        <Navigation />
        <PageContent />
      </div>
    );
  }
}