import './App.css';
import Header from './components/Header.component';
import Sidebar from './components/Sidebar.component';

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

export default App;