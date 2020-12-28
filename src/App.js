import Header from './Header'

import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
        {/*Feed*/}
        {/*Widgets*/}
      </div>
    </div>
  );
}

export default App;
