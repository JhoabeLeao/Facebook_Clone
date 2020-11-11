import './App.css';
import Header from './Header';
import facebook from './resources/facebook_bg.png';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="stories">   
          <div className="storiesCard" style={{backgroundImage:'url(${facebook})'}}>
            <p>Jhoabe Leão</p>
          </div>     
          <div className="storiesCard" style={{backgroundImage:'url(${facebook})'}}>
            <p>Jhoabe Leão</p>
          </div>     
          <div className="storiesCard" style={{backgroundImage:'url(${facebook})'}}>
            <p>Jhoabe Leão</p>
          </div>     
          <div className="storiesCard" style={{backgroundImage:'url(${facebook})'}}>
            <p>Jhoabe Leão</p>
          </div>     
          <div className="storiesCard" style={{backgroundImage:'url(${facebook})'}}>
            <p>Jhoabe Leão</p>
          </div>   
        </div>    
    </div>
  );
}

export default App;
