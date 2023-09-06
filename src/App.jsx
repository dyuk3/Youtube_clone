import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import store from './feature/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <App />,
  //     children: [
  //       {
  //         path: '/',
  //         element: <Body />,
  //         children: [{
  //           path: '/',
  //           element: <MainContainer />
  //         },
  //         {
  //           path: '/watch',
  //           element: <WatchPage />
  //         }
  //         ]
  //       },
  //       // {
  //       //   path: '/watch',
  //       //   element: <WatchPage />,
  //       // }
  //     ]
  //   }
  // ]);

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
