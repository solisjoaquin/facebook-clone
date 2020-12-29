import Header from './Header'

import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (<>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
          {/*Feed*/}
          {/*Widgets*/}
        </div>
      </>)}


    </div>
  );
}

export default App;
