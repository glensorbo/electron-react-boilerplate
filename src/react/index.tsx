import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import Moment from 'react-moment';

import { Provider } from 'react-redux';
import { store } from './store';

import './index.css';

Moment.globalFormat = 'DD.MM.YY';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
