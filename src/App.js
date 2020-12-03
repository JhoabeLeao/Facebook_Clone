import './App.css';
import Header from './Header';
import Stories from './Stories';
import profile from './resources/profile.jpg';
import FeedForm from './FeedForm';
import FeedPost from './FeedPost';
import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh} from "react-icons/ai";

function App() {
  return (
    <div className="App">
        <Header />
        <Stories /> 
        <FeedForm />
        <FeedPost nome="Jhoabe Leão" conteudo="Show Zombies Terminators!" horario="20:00"/>
        <FeedPost nome="Jhoabe Leão" conteudo="Show Zombies Terminators!" horario="20:00"/>
        <FeedPost nome="Jhoabe Leão" conteudo="Show Zombies Terminators!" horario="20:00"/>
        <FeedPost nome="Jhoabe Leão" conteudo="Show Zombies Terminators!" horario="20:00"/>            
    </div>
  );
}

export default App;
