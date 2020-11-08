import './App.css';
import {FaFacebook, FaSearch, FaAlignJustify } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="headerLeft">
          <div className="logo-fb">
            <FaFacebook />
          </div>
          <div className="search-fb">
            <FaSearch />
          </div>
          <div className="menu-fb">
            <FaAlignJustify />
          </div>

        </div>
        <div className="headerRight">
           
        </div>
      </div>
    
    </div>
  );
}

export default App;