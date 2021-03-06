import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebFontLoader from 'webfontloader';
import App from './App';
import * as serviceWorker from './serviceWorker';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
});

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
