// Importing the Project Directory Files
import './App.css';
import Header from './components/Header.component';
import Sidebar from './components/Sidebar.component';

// Initializing the application
function App() {
  return (
    // BEM Naming Convention
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* Slidebar */}
        {/* React-Router -> Chat Screen*/}
      </div>
    </div>
  );
}

// Exporting the application
export default App;