// Importing React Files
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Importing the Project Directory Files
import './App.css';
import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar.component';
import Chat from './components/Chat/Chat.component';  

// Initializing the application
function App() {
  return (
    // BEM Naming Convention
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Hello</h1>
            </Route>
          </Switch>
          {/* React-Router -> Chat Screen*/}
        </div>
      </Router>
      
    </div>
  );
}

// Exporting the application
export default App;