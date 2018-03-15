import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/';
import FastClick from 'fastclick';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from '@/store/store';
import './style/style.scss';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';


FastClick.attach(document.body);

// 监听state变化
store.subscribe(() => {
  console.log('store发生了变化');
});

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);

if(module.hot) {
  module.hot.accept('./router/', () => {
    render(Route);
  })
}
registerServiceWorker();
