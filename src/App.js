import './App.css';
import Header from './Header';
import Stories from './Stories';
import facebook_bg from './resources/facebook_bg.png';

function App() {
  return (
    <div className="App">
        <Header />
        <Stories /> 
        <div className="postarFeed">
          <div className="feedForm">
            <img src={facebook_bg} />
            <input type="text" />
          </div>
        </div>  
    </div>
  );
}

export default App;
