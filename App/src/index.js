import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
