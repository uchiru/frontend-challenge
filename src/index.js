import { store } from './store';
import { App } from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { Provider } from 'react-redux';

// import { store } from './store';

const $root = document.querySelector('#root');

if ($root) {
  const root = createRoot($root);

  root.render(
    <Provider store={store}>
    <App />
    </Provider>
  );
};
